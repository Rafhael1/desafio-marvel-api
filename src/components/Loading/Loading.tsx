import React from 'react'

import { Loader } from './Loading.Style'

export default function Loading() {
    return (
        <div>
            <Loader viewBox="0 0 50 50">
                <circle  className="path"
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    strokeWidth="8" 
                />
            </Loader>
        </div>
    )
}
