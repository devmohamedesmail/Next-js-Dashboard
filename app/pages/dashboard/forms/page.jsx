import CustomPreviewCode from '@/app/components/CustomPreviewCode'
import React from 'react'

export default function page() {
    return (
        <div className=''>
            <h2 className='font-bold'>Forms Components</h2>
            <div className='grid '>

                <div>
                    <h2 className='text-center mb-2'>Text input with border</h2>


                    <CustomPreviewCode
                        preview={<input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />}
                        htmlcode='<input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />'
                        jsxcode='<input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />'

                    />

                </div>
                <br />
                <hr />
                <div>
                    <h2 className='text-center mb-2'>Text input with border</h2>


                    <CustomPreviewCode
                        preview={<input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />}
                        htmlcode='<input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />'
                        jsxcode='<input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />'

                    />

                </div>
                <br />
                <hr />

                {/* <div role="tablist" className="tabs tabs-lifted">
                    <input type="radio" name="my_tabs_3" role="tab" className="tab" aria-label="Tab 1" />
                    <div role="tabpanel1" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        Tab content 1
                    </div>

                    <input
                        type="radio"
                        name="my_tabs_3"
                        role="tab"
                        className="tab"
                        aria-label="Tab 3"
                        defaultChecked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        Tab content 2
                    </div>

                    <input type="radio" name="my_tabs_3" role="tab" className="tab" aria-label="Tab 3" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        Tab content 3
                    </div>
                </div> */}

            </div>
        </div>
    )
}
