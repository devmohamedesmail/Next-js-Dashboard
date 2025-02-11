import CustomPageTitle from '@/app/components/CustomPageTitle'
import CustomPreviewCode from '@/app/components/CustomPreviewCode'
import React from 'react'

export default function Checkbox() {
    return (
        <div>
            <CustomPageTitle title="Checkbox Components" />
            <div className='grid gap-6'>
                <div>
                    <CustomPreviewCode
                        title="Checkbox"
                        preview={<input type="checkbox" defaultChecked className="checkbox" />}
                        htmlcode={`<input type="checkbox" checked="checked" class="checkbox" />`}
                        jsxcode={`<input type="checkbox" defaultChecked className="checkbox" />`}
                    />
                </div>
                <div>
                    <CustomPreviewCode
                        title=" With label and form-control"
                        preview={<div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Remember me</span>
                                <input type="checkbox" defaultChecked className="checkbox" />
                            </label>
                        </div>}
                        htmlcode={`<div class="form-control">
                                    <label class="label cursor-pointer">
                                        <span class="label-text">Remember me</span>
                                        <input type="checkbox" checked="checked" class="checkbox" />
                                    </label>
                                    </div>`}
                        jsxcode={`<div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Remember me</span>
                                    <input type="checkbox" defaultChecked className="checkbox" />
                                </label>
                                </div>`}
                    />
                </div>





                <div>
                    <CustomPreviewCode
                        title="Checkbox Primary"
                        preview={<input type="checkbox" defaultChecked className="checkbox checkbox-primary " />}
                        htmlcode={`<input type="checkbox" checked="checked" class="checkbox checkbox-primary " />`}
                        jsxcode={`<input type="checkbox" defaultChecked className="checkbox checkbox-primary" />`}
                    />
                </div>



                <div>
                    <CustomPreviewCode
                        title="Checkbox Secondary "
                        preview={<input type="checkbox" defaultChecked className="checkbox checkbox-secondary " />}
                        htmlcode={`<input type="checkbox" checked="checked" class="checkbox checkbox-secondary " />`}
                        jsxcode={`<input type="checkbox" defaultChecked className="checkbox checkbox-secondary" />`}
                    />
                </div>


                <div>
                    <CustomPreviewCode
                        title="Checkbox Success "
                        preview={<input type="checkbox" defaultChecked className="checkbox checkbox-success " />}
                        htmlcode={`<input type="checkbox" checked="checked" class="checkbox checkbox-success " />`}
                        jsxcode={`<input type="checkbox" defaultChecked className="checkbox checkbox-success" />`}
                    />
                </div>


                <div>
                    <CustomPreviewCode
                        title="Checkbox Info "
                        preview={<input type="checkbox" defaultChecked className="checkbox checkbox-info " />}
                        htmlcode={`<input type="checkbox" checked="checked" class="checkbox checkbox-info " />`}
                        jsxcode={`<input type="checkbox" defaultChecked className="checkbox checkbox-info" />`}
                    />
                </div>


                <div>
                    <CustomPreviewCode
                        title="Checkbox Error "
                        preview={<input type="checkbox" defaultChecked className="checkbox checkbox-error " />}
                        htmlcode={`<input type="checkbox" checked="checked" class="checkbox checkbox-error " />`}
                        jsxcode={`<input type="checkbox" defaultChecked className="checkbox checkbox-error" />`}
                    />
                </div>




            </div>
        </div>
    )
}
