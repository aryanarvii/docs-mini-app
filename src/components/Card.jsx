import React from 'react'
import { FaRegFileAlt } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { LuDownload } from 'react-icons/lu'
import { motion } from 'framer-motion'

function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragElastic={0.2} 
    dragTransition={{bounceStiffness:100, bounceDamping:15}}
    className='relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden'>
        <FaRegFileAlt/>
        <p className='text-sm leading-tight mt-5  font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0 left-0  w-full '>
            <div className='flex items-center justify-between py-3 px-8 mb-3'>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                    {
                        data.close ? 
                        (<IoClose/>) : 
                        (<LuDownload size=".7em" color='#fff'/>)
                    }
                    
                </span>
            </div>

            {/* instead of conditional check we can use && check for true rendering and null while false */}
            {data.tag.isOpen &&
            (
                <div className={`tag w-full py-4 ${data.tag.tagColor=== "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                <h3 className='text-sm font-semibold' >{data.tag.tagTitle}</h3>
                </div>
            ) 
            }
        </div>

    </motion.div>
  )
}

export default Card
