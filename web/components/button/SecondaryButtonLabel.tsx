import React from 'react'
import { Audiowide} from "next/font/google";

const audioWide = Audiowide({weight: '400',subsets: ['latin']});

type Props = {
    label:string
    isDisabled?:boolean
}

const SecondaryButtonLabel = (props: Props) => {
  return (
    <div className={`${audioWide.className} flex justify-center items-center rounded-full ${props.isDisabled? "bg-secondColor dark:bg-neutral-600 opacity-50":"bg-gray-500  hover:bg-gray-600"}  text-h3 text-white  text-center px-2 py-4 transition-all`}>{props.label}</div>
  )
}

export default SecondaryButtonLabel