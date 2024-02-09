'use client';

import React, { useRef, useState } from "react";
import { CustomTreeFolder } from "./UI/TreeFolder/CustomTreefolder";
import * as System from './UI/TreeFolder/CustomTreefolder.styled'

export default function Treefolder() {
    const folderRef = useRef(null);
    const [folder, setFolder] = useState([
        {
            name: "Mints",
            type: "folder",
            children: [
                { name: "Medical", type: "file" },
                { name: "Visa", type: "file" },
                {
                    name: "Public",
                    type: "folder",
                    children: [
                        { name: "index.js", type: "file" },
                        { name: "folder_one", type: "folder" },
                        {
                            name: "folder_two",
                            type: "folder",
                            children: [
                                { name: "children.js", type: "file", }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "Tree folder",
            type: "folder",
            children: [{ name: "children.js", type: "file", }]
        }
    ]);

    return (
        <React.Fragment>
            <CustomTreeFolder folder={folder} />
        </React.Fragment>
    )
}