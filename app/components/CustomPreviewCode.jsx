import React,{useId} from 'react'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CustomPreviewCode({ preview, htmlcode, jsxcode,title }) {
    const uniqueId = useId();
    return (
        <div>
            <h3 className='font-bold mb-5'>{title}</h3>
            <div role="tablist" className="tabs tabs-lifted">
            <input type="radio" name={`tabs_${uniqueId}`} role="tab" className="tab" aria-label="Preview" />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                {preview}
            </div>

            <input
                type="radio"
                name={`tabs_${uniqueId}`}
                role="tab"
                className="tab"
                aria-label="HTML"
                defaultChecked />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                <SyntaxHighlighter language="jsx" style={oneDark}>
                    {htmlcode}
                </SyntaxHighlighter>
            </div>

            <input type="radio" name={`tabs_${uniqueId}`} role="tab" className="tab" aria-label="JSX" />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                <SyntaxHighlighter language="jsx" style={oneDark}>
                    {jsxcode}
                </SyntaxHighlighter>

            </div>
        </div>
        </div>
    )
}
