import CustomPageTitle from '@/app/components/CustomPageTitle'
import CustomPreviewCode from '@/app/components/CustomPreviewCode'
import React from 'react'

export default function SelectElement() {
    const htmlcode = `<select className="select select-bordered w-full max-w-xs" defaultValue="">
  <option disabled selected>Who shot first?</option>
  <option>Han Solo</option>
  <option>Greedo</option>
</select>`


const jsxcode = `<select className="select select-bordered w-full max-w-xs" defaultValue="">
                 <option disabled selected>Who shot first?</option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                                </select>`
    return (
        <div>
            <CustomPageTitle title="Select Elements" />
            <div>
                <CustomPreviewCode
                    title="Select with border"
                    preview={<select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Who shot first?</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>}
                    htmlcode={htmlcode}

                    jsxcode={ jsxcode }

                />
            </div>
        </div>
    )
}
