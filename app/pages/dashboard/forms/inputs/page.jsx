import React from 'react'
import CustomPreviewCode from '@/app/components/CustomPreviewCode'
import CustomPageTitle from '@/app/components/CustomPageTitle'

export default function InputElements() {
  return (
    <div className=''>
        <CustomPageTitle title="Forms Components" />
              
               <div className='grid '>
   
                   <div className='mb-10 mt-10'>
                       <CustomPreviewCode
                           title="Text input with border"
                           preview={<input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />}
                           htmlcode='<input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />'
                           jsxcode='<input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />'
   
                       />
                   </div>
                  
                   <div className='mb-10'>
                       <CustomPreviewCode
                           title="Primary color"
                           preview={<input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />}
                           htmlcode='<input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />'
                           jsxcode='<input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />'
   
                       />
   
                   </div>
   
                   <div className='mb-10'>
                       <CustomPreviewCode
                           title="Text Area"
                           preview={<textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>}
                           htmlcode='<textarea class="textarea textarea-bordered" placeholder="Bio"></textarea>'
                           jsxcode='<textarea class="textarea textarea-bordered" placeholder="Bio"></textarea>'
   
                       />
   
                   </div>
                  
   
               </div>
           </div>
  )
}
