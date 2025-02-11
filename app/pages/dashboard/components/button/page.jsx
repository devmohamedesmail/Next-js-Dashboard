import CustomPageTitle from '@/app/components/CustomPageTitle'
import CustomPreviewCode from '@/app/components/CustomPreviewCode'
import React from 'react'

export default function Buttons() {
    return (
        <div>
            <CustomPageTitle title="Buttons" />

            <div className='grid gap-6'>
                <div>
                    <CustomPreviewCode
                        title="Button"
                        preview={<button className="btn">Button</button>}
                        htmlcode={`<button class="btn">Button</button>`}
                        jsxcode={`<button className="btn">Button</button>`}
                    />
                </div>


                <div>
                    <CustomPreviewCode
                        title="Buttons with brand colors"
                        preview={
                            <div className='space-x-2'>
                                <button className="btn">Button</button>
                                <button className="btn btn-neutral">Neutral</button>
                                <button className="btn btn-primary">Primary</button>
                                <button className="btn btn-secondary">Secondary</button>
                                <button className="btn btn-accent">Accent</button>
                                <button className="btn btn-ghost">Ghost</button>
                                <button className="btn btn-link">Link</button>
                            </div>}
                        htmlcode={`
                            <button class="btn">Button</button>
                            <button class="btn btn-neutral">Neutral</button>
                            <button class="btn btn-primary">Primary</button>
                            <button class="btn btn-secondary">Secondary</button>
                            <button class="btn btn-accent">Accent</button>
                            <button class="btn btn-ghost">Ghost</button>
                            <button class="btn btn-link">Link</button>
                            `}
                        jsxcode={`
                            <button className="btn">Button</button>
                            <button className="btn btn-neutral">Neutral</button>
                            <button className="btn btn-primary">Primary</button>
                            <button className="btn btn-secondary">Secondary</button>
                            <button className="btn btn-accent">Accent</button>
                            <button className="btn btn-ghost">Ghost</button>
                            <button className="btn btn-link">Link</button>
                            
                            `}
                    />
                </div>





                <div>
                    <CustomPreviewCode
                        title="Outline buttons"
                        preview={<div className='space-x-2'>
                            <button className="btn btn-outline">Default</button>
                            <button className="btn btn-outline btn-primary">Primary</button>
                            <button className="btn btn-outline btn-secondary">Secondary</button>
                            <button className="btn btn-outline btn-accent">Accent</button>
                        </div>}
                        htmlcode={`
                            <button class="btn btn-outline">Default</button>
                            <button class="btn btn-outline btn-primary">Primary</button>
                            <button class="btn btn-outline btn-secondary">Secondary</button>
                            <button class="btn btn-outline btn-accent">Accent</button>
                            
                            `}
                        jsxcode={`
                            <button className="btn btn-outline">Default</button>
                            <button className="btn btn-outline btn-primary">Primary</button>
                            <button className="btn btn-outline btn-secondary">Secondary</button>
                            <button className="btn btn-outline btn-accent">Accent</button>
                            
                            `}
                    />
                </div>




                <div>
                    <CustomPreviewCode
                        title="Button sizes"
                        preview={
                            <div className='space-x-2'>
                                <button className="btn btn-lg">Large</button>
                                <button className="btn">Normal</button>
                                <button className="btn btn-sm">Small</button>
                                <button className="btn btn-xs">Tiny</button>
                            </div>}
                        htmlcode={`
                            <button class="btn btn-lg">Large</button>
                            <button class="btn">Normal</button>
                            <button class="btn btn-sm">Small</button>
                            <button class="btn btn-xs">Tiny</button>
                            
                            `}
                        jsxcode={`
                            <button className="btn btn-lg">Large</button>
                            <button className="btn">Normal</button>
                            <button className="btn btn-sm">Small</button>
                            <button className="btn btn-xs">Tiny</button>
                            
                            `}
                    />
                </div>



                <div>
                    <CustomPreviewCode
                        title="Wide button"
                        preview={<button className="btn btn-wide">Wide</button>}
                        htmlcode={`<button class="btn btn-wide">Wide</button>`}
                        jsxcode={`<button className="btn btn-wide">Wide</button>`}
                    />
                </div>









            </div>
        </div>
    )
}
