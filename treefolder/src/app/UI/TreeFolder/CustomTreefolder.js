'use client';

import React, { useEffect, useRef, useState } from "react";
import { FaFolder, FaRegFile } from "react-icons/fa";
import * as System from './CustomTreefolder.styled';

export const CustomTreeFolder = React.forwardRef((props, ref) => {
    const resizeButtonRef = useRef(null);
    const [openFolder, setOpenFolder] = useState([]);
    const [isResizing, setIsResizing] = useState(false);
    const [initialX, setInitialX] = useState(null);
    const [navbarWidth, setNavbarWidth] = useState(250);

    {/* BUTTON FOR RESIZING NAVBAR */ }
    useEffect(() => {
        const handleMouseMove = (event) => {
            if (isResizing) {
                const newWidth = navbarWidth + (event.clientX - initialX);
                // Constrain the new width within certain bounds
                const constrainedWidth = Math.max(100, Math.min(newWidth, 500)); // Adjust the min and max width as needed
                setNavbarWidth(constrainedWidth);
                setInitialX(event.clientX);
            }
        };

        const handleMouseUp = () => {
            setIsResizing(false);
        };


        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp)
        }
    }, [isResizing, initialX])

    useEffect(() => {
        console.log(props.folder)
    }, [props.folder]);

    {/* BUTTON FOR RESIZING NAVBAR */ }
    const handleMouseDown = (event) => {
        if (event.target === resizeButtonRef.current) {
            setIsResizing(true);
            setInitialX(event.clientX);
        }
    };

    {/* Open folder */ }
    const handleOpenFolder = (index) => {
        const newOpenFolders = [...openFolder];
        newOpenFolders[index] = !newOpenFolders[index];
        setOpenFolder(newOpenFolders);
    };

    return (
        <System.FolderNav $navbarWidth={navbarWidth}>
            <System.Folderstyle>

                {/* GET FIRST ITEM OF ARR */}
                {props.folder.map((item, index) => (
                    <System.FolderContainer key={index}>
                        <System.FolderDropdown $openFolder={openFolder[index]} onClick={() => handleOpenFolder(index)}>

                            {/* FOLDER ICON & ITEM NAME */}
                            {item.type === 'folder' && (
                                <div>
                                    <span><FaFolder style={{ color: "white" }} /></span>
                                    <b>{item.name}</b>
                                </div>
                            )}

                            {/* PASS EVERY ARR CHILDREN ITEM TO OTHER FUNC */}
                            {item.children && (

                                <System.Folderstyle>
                                    {item.hasOwnProperty('children') && item.children.map((child, subindex) => (
                                        <GetchildrenItem
                                            key={`${item.name}${subindex}`}
                                            itemKey={`${child.item}${subindex}`}
                                            children={child}
                                        />
                                    ))}
                                </System.Folderstyle>
                            )}

                        </System.FolderDropdown>
                    </System.FolderContainer>
                ))}

                {/* BUTTON FOR RESIZING NAVBAR */}
                <System.ResizeButton ref={resizeButtonRef} onMouseDown={handleMouseDown}>+</System.ResizeButton>

            </System.Folderstyle>
        </System.FolderNav >
    )
})

const GetchildrenItem = (props) => {
    useEffect(() => {
        console.log(props.elemKey)
    }, [props])

    return (
        <System.FolderChildren key={`${props.itemKey}${props.elemKey}`}>
            {/* CHANGE ICON DEPENDING ON CHILDREN TYPE */}
            <div>
                {props.children.type === 'file' ? (
                    <>
                        <span>
                            <FaRegFile style={{ color: "white" }} />
                        </span>
                        {props.children.name}
                    </>
                ) : (
                    <>
                        <span>
                            <FaFolder style={{ color: "white" }} />
                        </span>
                        <b>{props.children.name}</b>
                    </>
                )}
            </div>

            {/* IF FOLDER HAS CHILDREN PROPERTY AND IT'S AN ARRAY */}
            <ul>
                {props.children.children && Array.isArray(props.children.children) && (
                    <ul>
                        {props.children.children.map((child, subindex) => (
                            <GetchildrenItem
                                key={`${props.itemKey}${subindex}`}
                                elemKey={`subindex${child}${subindex}`}
                                itemKey={`${child.item}${subindex}`}
                                children={child}
                            />
                        ))}
                    </ul>
                )}
            </ul>
        </System.FolderChildren>
    )
}