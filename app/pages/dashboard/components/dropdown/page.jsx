import CustomPageTitle from '@/app/components/CustomPageTitle'
import CustomPreviewCode from '@/app/components/CustomPreviewCode'
import React from 'react'

export default function Dropdown() {
  return (
    <div>
      <CustomPageTitle title="Dropdown Menu" />
      <div className='grid gap-6'>
        <div>
          <CustomPreviewCode
            title="Dropdown Menu"
            preview={
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">Click</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  <li><a>Item 1</a></li>
                  <li><a>Item 2</a></li>
                </ul>
              </div>
            }

            htmlcode={`
              <div class="dropdown">
                <div tabindex="0" role="button" class="btn m-1">Click</div>
                <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  <li><a>Item 1</a></li>
                  <li><a>Item 2</a></li>
                </ul>
              </div>
              `}

            jsxcode={`
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn m-1">Click</div>
                  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                  </ul>
                </div>
                `}

          />
        </div>





        <div>
          <CustomPreviewCode
            title="Dropdown / aligns to end"
            preview={
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn m-1">Click</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  <li><a>Item 1</a></li>
                  <li><a>Item 2</a></li>
                </ul>
              </div>
            }

            htmlcode={`
             <div class="dropdown dropdown-end">
              <div tabindex="0" role="button" class="btn m-1">Click</div>
              <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
              </ul>
            </div>
              `}

            jsxcode={`
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn m-1">Click</div>
                  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                  </ul>
                </div>
                `}

          />
        </div>




        <div>
          <CustomPreviewCode
            title="Dropdown top"
            preview={
              <div className="dropdown dropdown-top">
                <div tabIndex={0} role="button" className="btn m-1">Click</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  <li><a>Item 1</a></li>
                  <li><a>Item 2</a></li>
                </ul>
              </div>
            }

            htmlcode={`
            <div class="dropdown dropdown-top">
              <div tabindex="0" role="button" class="btn m-1">Click</div>
              <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
              </ul>
            </div>
              `}

            jsxcode={`
                <div className="dropdown dropdown-top">
                  <div tabIndex={0} role="button" className="btn m-1">Click</div>
                  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                  </ul>
                </div>
                `}

          />
        </div>





      </div>
    </div>
  )
}
