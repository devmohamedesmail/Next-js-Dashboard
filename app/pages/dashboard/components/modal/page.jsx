'use client'
import CustomPageTitle from '@/app/components/CustomPageTitle'
import CustomPreviewCode from '@/app/components/CustomPreviewCode'
import React from 'react'

export default function ModalComponent() {
    return (
        <div>
            <CustomPageTitle title="Modal" />
            <div className='grid gap-6'>
                <div>
                    <CustomPreviewCode
                        title="Dialog modal"
                        preview={<>
                            <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button>
                            <dialog id="my_modal_1" className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">Hello!</h3>
                                    <p className="py-4">Press ESC key or click the button below to close</p>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </>}

                        htmlcode={`
                            <button class="btn" onclick="my_modal_1.showModal()">open modal</button>
                                <dialog id="my_modal_1" class="modal">
                                <div class="modal-box">
                                    <h3 class="text-lg font-bold">Hello!</h3>
                                    <p class="py-4">Press ESC key or click the button below to close</p>
                                    <div class="modal-action">
                                    <form method="dialog">
                                        <!-- if there is a button in form, it will close the modal -->
                                        <button class="btn">Close</button>
                                    </form>
                                    </div>
                                </div>
                                </dialog>
                            `}
                        jsxcode={`
                            <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button>
                            <dialog id="my_modal_1" className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">Hello!</h3>
                                    <p className="py-4">Press ESC key or click the button below to close</p>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                            `}

                    />
                </div>



                <div>
                    <CustomPreviewCode
                        title="Dialog modal, closes when clicked outside"
                        preview={<>
                            <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>open modal</button>
                            <dialog id="my_modal_2" className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">Hello!</h3>
                                    <p className="py-4">Press ESC key or click outside to close</p>
                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>
                        </>}

                        htmlcode={`
                            <button class="btn" onclick="my_modal_2.showModal()">open modal</button>
                            <dialog id="my_modal_2" class="modal">
                            <div class="modal-box">
                                <h3 class="text-lg font-bold">Hello!</h3>
                                <p class="py-4">Press ESC key or click outside to close</p>
                            </div>
                            <form method="dialog" class="modal-backdrop">
                                <button>close</button>
                            </form>
                            </dialog>
                            `}
                        jsxcode={`
                            <button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>open modal</button>
                            <dialog id="my_modal_2" className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Hello!</h3>
                                <p className="py-4">Press ESC key or click outside to close</p>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                            </dialog>
                            `}

                    />
                </div>


                <div>
                    <CustomPreviewCode
                        title="Dialog modal with a close button at corner"
                        preview={<>
                            <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button>
                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <h3 className="font-bold text-lg">Hello!</h3>
                                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                                </div>
                            </dialog>
                        </>}

                        htmlcode={`
                           <button class="btn" onclick="my_modal_3.showModal()">open modal</button>
                            <dialog id="my_modal_3" class="modal">
                            <div class="modal-box">
                                <form method="dialog">
                                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 class="text-lg font-bold">Hello!</h3>
                                <p class="py-4">Press ESC key or click on ✕ button to close</p>
                            </div>
                            </dialog>
                            `}
                        jsxcode={`
                            <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button>
                            <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-lg">Hello!</h3>
                                <p className="py-4">Press ESC key or click on ✕ button to close</p>
                            </div>
                            </dialog>
                            `}

                    />
                </div>




                <div>
                    <CustomPreviewCode
                        title="Dialog modal with custom width"
                        preview={<>
                            <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>open modal</button>
                            <dialog id="my_modal_4" className="modal">
                                <div className="modal-box w-11/12 max-w-5xl">
                                    <h3 className="font-bold text-lg">Hello!</h3>
                                    <p className="py-4">Click the button below to close</p>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button, it will close the modal */}
                                            <button className="btn">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </>}

                        htmlcode={`
                          <button class="btn" onclick="my_modal_4.showModal()">open modal</button>
                        <dialog id="my_modal_4" class="modal">
                        <div class="modal-box w-11/12 max-w-5xl">
                            <h3 class="text-lg font-bold">Hello!</h3>
                            <p class="py-4">Click the button below to close</p>
                            <div class="modal-action">
                            <form method="dialog">
                                <!-- if there is a button, it will close the modal -->
                                <button class="btn">Close</button>
                            </form>
                            </div>
                        </div>
                        </dialog>
                            `}
                        jsxcode={`
                           <button className="btn" onClick={()=>document.getElementById('my_modal_4').showModal()}>open modal</button>
                            <dialog id="my_modal_4" className="modal">
                            <div className="modal-box w-11/12 max-w-5xl">
                                <h3 className="font-bold text-lg">Hello!</h3>
                                <p className="py-4">Click the button below to close</p>
                                <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                                </div>
                            </div>
                            </dialog>
                            `}

                    />
                </div>




                <div>
                    <CustomPreviewCode
                        title="Responsive"
                        preview={<>
                            <label htmlFor="my_modal_6" className="btn">open modal</label>

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                            <div className="modal" role="dialog">
                                <div className="modal-box">
                                    <h3 className="text-lg font-bold">Hello!</h3>
                                    <p className="py-4">This modal works with a hidden checkbox!</p>
                                    <div className="modal-action">
                                        <label htmlFor="my_modal_6" className="btn">Close!</label>
                                    </div>
                                </div>
                            </div>
                        </>}

                        htmlcode={`
                         <label for="my_modal_6" class="btn">open modal</label>

                            <!-- Put this part before </body> tag -->
                            <input type="checkbox" id="my_modal_6" class="modal-toggle" />
                            <div class="modal" role="dialog">
                            <div class="modal-box">
                                <h3 class="text-lg font-bold">Hello!</h3>
                                <p class="py-4">This modal works with a hidden checkbox!</p>
                                <div class="modal-action">
                                <label for="my_modal_6" class="btn">Close!</label>
                                </div>
                            </div>
                            </div>
                            `}
                        jsxcode={`
                           <label htmlFor="my_modal_6" className="btn">open modal</label>

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                            <div className="modal" role="dialog">
                            <div className="modal-box">
                                <h3 className="text-lg font-bold">Hello!</h3>
                                <p className="py-4">This modal works with a hidden checkbox!</p>
                                <div className="modal-action">
                                <label htmlFor="my_modal_6" className="btn">Close!</label>
                                </div>
                            </div>
                            </div>
                            `}

                    />
                </div>

            </div>
        </div>
    )
}
