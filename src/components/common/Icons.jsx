export function Github() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 md:h-10 md:w-10"
            viewBox="0 0 24 24"
        >
            <path
                fill="black"
                fillOpacity={0}
                d="M15 4.5C14.6122 4.39991 13.6683 4 12 4C10.3317 4 9.38784 4.39991 9 4.5C8.47455 4.07463 7.0625 3 5.5 3C5.15625 4 5.21371 5.21921 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.6875 4.98302 13.0822 6 14C7.01698 14.9178 8.1113 15.3749 9.5 15.5C8.84944 16.038 9 17.3743 9 18V22H15V18C15 17.3743 15.1506 16.038 14.5 15.5C15.8887 15.3749 16.983 14.9178 18 14C19.017 13.0822 19.5 11.6875 19.5 9.5C19.5 8 19.25 7 18.5 6C18.7863 5.21921 18.8438 4 18.5 3C16.9375 3 15.5255 4.07463 15 4.5Z"
            >
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.6s"
                    dur="0.15s"
                    values="0;0.3"
                ></animate>
            </path>
            <g
                fill="none"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
            >
                <path
                    strokeDasharray={30}
                    strokeDashoffset={30}
                    d="M12 4C13.6683 4 14.6122 4.39991 15 4.5C15.5255 4.07463 16.9375 3 18.5 3C18.8438 4 18.7863 5.21921 18.5 6C19.25 7 19.5 8 19.5 9.5C19.5 11.6875 19.017 13.0822 18 14C16.983 14.9178 15.8887 15.3749 14.5 15.5C15.1506 16.038 15 17.3743 15 18C15 18.7256 15 21 15 21M12 4C10.3317 4 9.38784 4.39991 9 4.5C8.47455 4.07463 7.0625 3 5.5 3C5.15625 4 5.21371 5.21921 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.6875 4.98301 13.0822 6 14C7.01699 14.9178 8.1113 15.3749 9.5 15.5C8.84944 16.038 9 17.3743 9 18C9 18.7256 9 21 9 21"
                >
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.6s"
                        values="30;0"
                    ></animate>
                </path>
                <path
                    strokeDasharray={10}
                    strokeDashoffset={10}
                    d="M9 19C7.59375 19 6.15625 18.4375 5.3125 17.8125C4.46875 17.1875 4.21875 16.1562 3 15.5"
                >
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.7s"
                        dur="0.2s"
                        values="10;0"
                    ></animate>
                </path>
            </g>
        </svg>
    )
}

export function LinkedIn() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 md:h-10 md:w-10"
            viewBox="0 0 24 24"
        >
            <circle cx={4} cy={4} r={2} fill="black" fillOpacity={0}>
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    dur="0.4s"
                    values="0;1"
                ></animate>
            </circle>
            <g fill="none" stroke="black" strokeLinecap="round" strokeWidth={4}>
                <path strokeDasharray={12} strokeDashoffset={12} d="M4 10V20">
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.2s"
                        dur="0.2s"
                        values="12;0"
                    ></animate>
                </path>
                <path strokeDasharray={12} strokeDashoffset={12} d="M10 10V20">
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.5s"
                        dur="0.2s"
                        values="12;0"
                    ></animate>
                </path>
                <path
                    strokeDasharray={24}
                    strokeDashoffset={24}
                    d="M10 15C10 12.2386 12.2386 10 15 10C17.7614 10 20 12.2386 20 15V20"
                >
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.7s"
                        dur="0.5s"
                        values="24;0"
                    ></animate>
                </path>
            </g>
        </svg>
    )
}

export function Mail() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 md:h-10 md:w-10"
            viewBox="0 0 24 24"
        >
            <path fill="black" fillOpacity={0} d="M12 13L4 8V18H20V8L12 13Z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="1s"
                    dur="0.15s"
                    values="0;0.3"
                ></animate>
            </path>
            <g fill="none" stroke="black" strokeLinecap="round" strokeWidth={2}>
                <rect
                    width={18}
                    height={14}
                    x={3}
                    y={5}
                    strokeDasharray={64}
                    strokeDashoffset={64}
                    rx={1}
                >
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.6s"
                        values="64;0"
                    ></animate>
                </rect>
                <path
                    strokeDasharray={24}
                    strokeDashoffset={24}
                    d="M3 6.5L12 12L21 6.5"
                >
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.6s"
                        dur="0.4s"
                        values="24;0"
                    ></animate>
                </path>
            </g>
        </svg>
    )
}