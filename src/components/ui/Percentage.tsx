'use client'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Percentage({ percentage }: { percentage: number }) {

    return (
        <div className='w-12'>
            <CircularProgressbar background={true} styles={{ background: { fill: 'black' }, text: { fontSize: '30px' } }} value={percentage} text={`${percentage.toFixed(0)}%`} />
        </div>
    )
}
