import CustomPageTitle from '@/app/components/CustomPageTitle'
import CustomPreviewCode from '@/app/components/CustomPreviewCode'
import React from 'react'

export default function RadioElement() {
    return (
        <div>
            <CustomPageTitle title="Radio Elements" />
            <div className='grid gap-7'>
                <div>
                    <CustomPreviewCode
                        title="Primary color"
                        preview={
                            <>
                                <input type="radio" name="radio-2" className="radio radio-primary mx-2" defaultChecked />
                                <input type="radio" name="radio-2" className="radio radio-primary mx-2" />
                            </>}
                        htmlcode={`<input type="radio" name="radio-2" class="radio radio-primary" checked="checked" />
                       <input type="radio" name="radio-2" class="radio radio-primary" />`
                        }
                        jsxcode={`<input type="radio" name="radio-2" className="radio radio-primary" defaultChecked />
                                      <input type="radio" name="radio-2" className="radio radio-primary" />`}
                    />
                </div>
                <div>
                    <CustomPreviewCode
                        title="Secondary color"
                        preview={
                            <>
                                <input type="radio" name="radio-2" className="radio radio-secondary mx-2" defaultChecked />
                                <input type="radio" name="radio-2" className="radio radio-secondary mx-2" />
                            </>}
                        htmlcode={`<input type="radio" name="radio-2" class="radio radio-secondary" checked="checked" />
                       <input type="radio" name="radio-2" class="radio radio-secondary" />`
                        }
                        jsxcode={`<input type="radio" name="radio-2" className="radio radio-secondary" defaultChecked />
                                      <input type="radio" name="radio-2" className="radio radio-secondary" />`}
                    />
                </div>




                <div>
                    <CustomPreviewCode
                        title="Accent color"
                        preview={
                            <>
                                <input type="radio" name="radio-2" className="radio radio-accent mx-2" defaultChecked />
                                <input type="radio" name="radio-2" className="radio radio-accent mx-2" />
                            </>}
                        htmlcode={`<input type="radio" name="radio-2" class="radio radio-accent" checked="checked" />
                       <input type="radio" name="radio-2" class="radio radio-accent" />`
                        }
                        jsxcode={`<input type="radio" name="radio-2" className="radio radio-accent" defaultChecked />
                                      <input type="radio" name="radio-2" className="radio radio-accent" />`}
                    />
                </div>



                <div>
                    <CustomPreviewCode
                        title="Success color"
                        preview={
                            <>
                                <input type="radio" name="radio-2" className="radio radio-success mx-2" defaultChecked />
                                <input type="radio" name="radio-2" className="radio radio-success mx-2" />
                            </>}
                        htmlcode={`<input type="radio" name="radio-2" class="radio radio-success" checked="checked" />
                       <input type="radio" name="radio-2" class="radio radio-success" />`
                        }
                        jsxcode={`<input type="radio" name="radio-2" className="radio radio-success" defaultChecked />
                                      <input type="radio" name="radio-2" className="radio radio-success" />`}
                    />
                </div>



                <div>
                    <CustomPreviewCode
                        title="Warning color"
                        preview={
                            <>
                                <input type="radio" name="radio-2" className="radio radio-warning mx-2" defaultChecked />
                                <input type="radio" name="radio-2" className="radio radio-warning mx-2" />
                            </>}
                        htmlcode={`<input type="radio" name="radio-2" class="radio radio-warning" checked="checked" />
                       <input type="radio" name="radio-2" class="radio radio-warning" />`
                        }
                        jsxcode={`<input type="radio" name="radio-2" className="radio radio-warning" defaultChecked />
                                      <input type="radio" name="radio-2" className="radio radio-warning" />`}
                    />
                </div>


                <div>
                    <CustomPreviewCode
                        title="Info color"
                        preview={
                            <>
                                <input type="radio" name="radio-2" className="radio radio-info mx-2" defaultChecked />
                                <input type="radio" name="radio-2" className="radio radio-info mx-2" />
                            </>}
                        htmlcode={`<input type="radio" name="radio-2" class="radio radio-info" checked="checked" />
                       <input type="radio" name="radio-2" class="radio radio-info" />`
                        }
                        jsxcode={`<input type="radio" name="radio-2" className="radio radio-info" defaultChecked />
                                      <input type="radio" name="radio-2" className="radio radio-info" />`}
                    />
                </div>


                <div>
                    <CustomPreviewCode
                        title="Error color"
                        preview={
                            <>
                                <input type="radio" name="radio-2" className="radio radio-error mx-2" defaultChecked />
                                <input type="radio" name="radio-2" className="radio radio-error mx-2" />
                            </>}
                        htmlcode={`<input type="radio" name="radio-2" class="radio radio-error" checked="checked" />
                       <input type="radio" name="radio-2" class="radio radio-error" />`
                        }
                        jsxcode={`<input type="radio" name="radio-2" className="radio radio-error" defaultChecked />
                                      <input type="radio" name="radio-2" className="radio radio-error" />`}
                    />
                </div>


                <div>
                    <CustomPreviewCode
                        title="With label and form-control and custom colors!"
                        preview={
                            <>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Red pill</span>
                                        <input type="radio" name="radio-10" className="radio checked:bg-red-500" defaultChecked />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Blue pill</span>
                                        <input type="radio" name="radio-10" className="radio checked:bg-blue-500" defaultChecked />
                                    </label>
                                </div>
                            </>}
                        htmlcode={`<div class="form-control">
  <label class="label cursor-pointer">
    <span class="label-text">Red pill</span>
    <input type="radio" name="radio-10" class="radio checked:bg-red-500" checked="checked" />
  </label>
</div>
<div class="form-control">
  <label class="label cursor-pointer">
    <span class="label-text">Blue pill</span>
    <input type="radio" name="radio-10" class="radio checked:bg-blue-500" checked="checked" />
  </label>
</div>`
                        }
                        jsxcode={`<div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text">Red pill</span>
    <input type="radio" name="radio-10" className="radio checked:bg-red-500" defaultChecked />
  </label>
</div>
<div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text">Blue pill</span>
    <input type="radio" name="radio-10" className="radio checked:bg-blue-500" defaultChecked />
  </label>
</div>`}
                    />
                </div>




            </div>
        </div>
    )
}
