import CustomPageTitle from '@/app/components/CustomPageTitle'
import CustomPreviewCode from '@/app/components/CustomPreviewCode'
import React from 'react'

export default function StepsComponent() {
    return (
        <div>
            <CustomPageTitle title="Steps" />
            <div className="grid gap-6">
                <div>
                    <CustomPreviewCode
                        title="Horizontal"
                        preview={
                            <ul className="steps">
                                <li className="step step-primary">Register</li>
                                <li className="step step-primary">Choose plan</li>
                                <li className="step">Purchase</li>
                                <li className="step">Receive Product</li>
                            </ul>
                        }
                        htmlcode={`
                <ul class="steps">
                    <li class="step step-primary">Register</li>
                    <li class="step step-primary">Choose plan</li>
                    <li class="step">Purchase</li>
                    <li class="step">Receive Product</li>
                </ul>
                `}

                        jsxcode={
                            `
                <ul className="steps">
                <li className="step step-primary">Register</li>
                <li className="step step-primary">Choose plan</li>
                <li className="step">Purchase</li>
                <li className="step">Receive Product</li>
                </ul>
                `
                        }
                    />
                </div>




                <div>
                    <CustomPreviewCode
                        title="Vertical"
                        preview={
                            <ul className="steps steps-vertical">
                                <li className="step step-primary">Register</li>
                                <li className="step step-primary">Choose plan</li>
                                <li className="step">Purchase</li>
                                <li className="step">Receive Product</li>
                            </ul>
                        }
                        htmlcode={`
                            <ul class="steps steps-vertical">
                                <li class="step step-primary">Register</li>
                                <li class="step step-primary">Choose plan</li>
                                <li class="step">Purchase</li>
                                <li class="step">Receive Product</li>
                            </ul>
                             `}

                        jsxcode={
                            `
                            <ul className="steps steps-vertical">
                            <li className="step step-primary">Register</li>
                            <li className="step step-primary">Choose plan</li>
                            <li className="step">Purchase</li>
                            <li className="step">Receive Product</li>
                            </ul>
                `
                        }
                    />
                </div>



                <div>
                    <CustomPreviewCode
                        title="responsive (vertical on small screen, horizontal on large screen)"
                        preview={
                            <ul className="steps steps-vertical lg:steps-horizontal">
                                <li className="step step-primary">Register</li>
                                <li className="step step-primary">Choose plan</li>
                                <li className="step">Purchase</li>
                                <li className="step">Receive Product</li>
                            </ul>
                        }
                        htmlcode={`
                            <ul class="steps steps-vertical lg:steps-horizontal">
                                <li class="step step-primary">Register</li>
                                <li class="step step-primary">Choose plan</li>
                                <li class="step">Purchase</li>
                                <li class="step">Receive Product</li>
                            </ul>
                             `}

                        jsxcode={
                            `
                            <ul className="steps steps-vertical lg:steps-horizontal">
                            <li className="step step-primary">Register</li>
                            <li className="step step-primary">Choose plan</li>
                            <li className="step">Purchase</li>
                            <li className="step">Receive Product</li>
                            </ul>
                `
                        }
                    />
                </div>



                <div>
                    <CustomPreviewCode
                        title="With data-content"
                        preview={
                            <ul className="steps">
                                <li data-content="?" className="step step-neutral">Step 1</li>
                                <li data-content="!" className="step step-neutral">Step 2</li>
                                <li data-content="✓" className="step step-neutral">Step 3</li>
                                <li data-content="✕" className="step step-neutral">Step 4</li>
                                <li data-content="★" className="step step-neutral">Step 5</li>
                                <li data-content="" className="step step-neutral">Step 6</li>
                                <li data-content="●" className="step step-neutral">Step 7</li>
                            </ul>
                        }
                        htmlcode={`
                           <ul className="steps">
                                <li data-content="?" className="step step-neutral">Step 1</li>
                                <li data-content="!" className="step step-neutral">Step 2</li>
                                <li data-content="✓" className="step step-neutral">Step 3</li>
                                <li data-content="✕" className="step step-neutral">Step 4</li>
                                <li data-content="★" className="step step-neutral">Step 5</li>
                                <li data-content="" className="step step-neutral">Step 6</li>
                                <li data-content="●" className="step step-neutral">Step 7</li>
                            </ul>
                             `}

                        jsxcode={
                            `
                            <ul className="steps">
                                <li data-content="?" className="step step-neutral">Step 1</li>
                                <li data-content="!" className="step step-neutral">Step 2</li>
                                <li data-content="✓" className="step step-neutral">Step 3</li>
                                <li data-content="✕" className="step step-neutral">Step 4</li>
                                <li data-content="★" className="step step-neutral">Step 5</li>
                                <li data-content="" className="step step-neutral">Step 6</li>
                                <li data-content="●" className="step step-neutral">Step 7</li>
                            </ul>
                `
                        }
                    />
                </div>


                <div>
                    <CustomPreviewCode
                        title="Custom colors"
                        preview={
                            <ul className="steps">
                                <li className="step step-info">Fly to moon</li>
                                <li className="step step-info">Shrink the moon</li>
                                <li className="step step-info">Grab the moon</li>
                                <li className="step step-error" data-content="?">Sit on toilet</li>
                            </ul>
                        }
                        htmlcode={`
                         <ul class="steps">
                            <li class="step step-info">Fly to moon</li>
                            <li class="step step-info">Shrink the moon</li>
                            <li class="step step-info">Grab the moon</li>
                            <li class="step step-error" data-content="?">Sit on toilet</li>
                            </ul>
                             `}

                        jsxcode={
                            `
                           <ul className="steps">
                                <li className="step step-info">Fly to moon</li>
                                <li className="step step-info">Shrink the moon</li>
                                <li className="step step-info">Grab the moon</li>
                                <li className="step step-error" data-content="?">Sit on toilet</li>
                            </ul>
                `
                        }
                    />
                </div>


                <div>
                    <CustomPreviewCode
                        title="With scrollable wrapper"
                        preview={
                            <ul className="steps">
                                <li className="step step-info">Fly to moon</li>
                                <li className="step step-info">Shrink the moon</li>
                                <li className="step step-info">Grab the moon</li>
                                <li className="step step-error" data-content="?">Sit on toilet</li>
                            </ul>
                        }
                        htmlcode={`
                        <ul class="steps">
                            <li class="step step-info">Fly to moon</li>
                            <li class="step step-info">Shrink the moon</li>
                            <li class="step step-info">Grab the moon</li>
                            <li class="step step-error" data-content="?">Sit on toilet</li>
                        </ul>
                             `}

                        jsxcode={
                            `
                          <ul className="steps">
                            <li className="step step-info">Fly to moon</li>
                            <li className="step step-info">Shrink the moon</li>
                            <li className="step step-info">Grab the moon</li>
                            <li className="step step-error" data-content="?">Sit on toilet</li>
                        </ul>
                `
                        }
                    />
                </div>




            </div>

        </div>
    )
}
