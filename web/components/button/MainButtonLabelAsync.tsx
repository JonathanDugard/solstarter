

import React from 'react'
import { LuLoader2 } from 'react-icons/lu'
import { Audiowide} from "next/font/google";

const audioWide = Audiowide({weight: '400',subsets: ['latin']});

type Props = {
    label:string
    isDisabled?:boolean
    isLoading:boolean
    loadingLabel?:string
}

const MainButtonLabelAsync = (props: Props) => {


  return (
    <div className={`${audioWide.className} flex justify-center items-center rounded-full ${props.isDisabled? "bg-secondColor dark:bg-neutral-600 opacity-50":"bg-accentColor  hover:bg-accentColor/50"}  text-h3 text-white  text-center px-2 py-4 transition-all`}>
      {props.isLoading?
      <div className='flex justify-center items-center gap-2'>
        <p>{props.loadingLabel}</p>
        <p>
          <LuLoader2 className='animate-spin' size={30} style={{ color: '#FFFFFF' }} />
        </p>
      </div>
      :  
      props.label}
    </div>
  )
}

export default MainButtonLabelAsync