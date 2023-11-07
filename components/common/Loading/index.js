import React from 'react';
import { ClipLoader, HashLoader, RingLoader, ScaleLoader, BarLoader, PuffLoader, GridLoader, CircleLoader } from "react-spinners";


const Loading = ({ type = 'RingLoader', size = 50, color = '#fff' }) => {

    const Type = function () {
        switch (type) {
            case ('HashLoader'):
                return HashLoader
            case ('ClipLoader'):
                return ClipLoader
            case ('RingLoader'):
                return RingLoader
            case ('BarLoader'):
                return BarLoader
            case ('PuffLoader'):
                return PuffLoader
            case ('GridLoader'):
                return GridLoader
            case ('CircleLoader'):
                return CircleLoader
            default:
                return ScaleLoader
        }
    }()

    return (
        <div className='w-full flex items-center justify-center'>
            {
                Type({
                    color: color,
                    loading: true,
                    size: size,
                    // 'aria-label': "Loading Spinner",
                    // 'data-testid': "loader"
                })
            }
        </div>
    )
}

export default Loading