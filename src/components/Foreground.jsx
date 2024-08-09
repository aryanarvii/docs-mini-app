import React, { useRef } from 'react'
import Card from './Card'


function Foreground() {
    const ref = useRef(null);
    const data =[
        // {
        //     desc: "Lorem7= ipsum dolor sit ammet consector adipsisngscds",
        //     filesize: ".9mb",
        //     close: false,
        //     tag: {
        //         isOpen: true,
        //         tagTitle: "Download Now",
        //         tagColor: "green"
        //     },
        // },

        // {
        //     desc: "Lorem7= ipsum dolor sit ammet consector adipsisngscds",
        //     filesize: ".9mb",
        //     close: true,
        //     tag: {
        //         isOpen: true,
        //         tagTitle: "Upload",
        //         tagColor: "blue"
        //     },
        // },

        // {
        //     desc: "Lorem7= ipsum dolor sit ammet consector adipsisngscds",
        //     filesize: ".9mb",
        //     close: true,
        //     tag: {
        //         isOpen: false,
        //         tagTitle: "Download Now",
        //         tagColor: "green"
        //     },
        // },
    
        {
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            filesize: "1.2MB",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green"
            },
        },
        
        {
            desc: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            filesize: "2.4MB",
            close: false,
            tag: {
                isOpen: false,
                tagTitle: "Expired",
                tagColor: "red"
            },
        },
        
        {
            desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            filesize: "750KB",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Shopping",
                tagColor: "orange"
            },
        },
        
        {
            desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            filesize: "3.1MB",
            close: false,
            tag: {
                isOpen: false,
                tagTitle: "Closed",
                tagColor: "gray"
            },
        },
        
        {
        desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        filesize: "500KB",
        close: true,
        tag: {
            isOpen: true,
            tagTitle: "Upload",
            tagColor: "blue"
            },
        },
    ]
    
  return (
    
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap flex-shrink-0 p-5'>
        {
            data.map( (item, index) => (
                <Card key={index} data={item} reference={ref}/>
            ))
        }
    </div>
    
  )
}

export default Foreground;
