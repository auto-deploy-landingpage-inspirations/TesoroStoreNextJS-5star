import React from 'react'

export default function () {
  return (
    <div>
        <div className="group inline-block">
            <button
                aria-haspopup="true"
                aria-controls="menu"
                className="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
            >
                <span className="pr-1 font-semibold flex-1">Dropdown</span>
                <span>
                <svg
                    className="fill-current h-4 w-4 transform group-hover:-rotate-180
                transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                </svg>
                </span>
            </button>
            <ul
                id="menu"
                aria-hidden="true"
                className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
        transition duration-150 ease-in-out origin-top min-w-32"
            >
                <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Programming</li>
                <li className="rounded-sm px-3 py-1 hover:bg-gray-100">DevOps</li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                <button
                    aria-haspopup="true"
                    aria-controls="menu-lang"
                    className="w-full text-left flex items-center outline-none focus:outline-none"
                >
                    <span className="pr-1 flex-1">Langauges</span>
                    <span className="mr-auto">
                    <svg
                        className="fill-current h-4 w-4
                    transition duration-150 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        />
                    </svg>
                    </span>
                </button>
                <ul
                    id="menu-lang"
                    aria-hidden="true"
                    className="bg-white border rounded-sm absolute top-0 right-0 
        transition duration-150 ease-in-out origin-top-left
        min-w-32
        "
                >
                    <li className="px-3 py-1 hover:bg-gray-100">Javascript</li>
                    <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                    <button
                        aria-haspopup="true"
                        aria-controls="menu-lang-python"
                        className="w-full text-left flex items-center outline-none focus:outline-none"
                    >
                        <span className="pr-1 flex-1">Python</span>
                        <span className="mr-auto">
                        <svg
                            className="fill-current h-4 w-4
                        transition duration-150 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path
                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                            />
                        </svg>
                        </span>
                    </button>
                    <ul
                        id="menu-lang-python"
                        aria-hidden="true"
                        className="bg-white border rounded-sm absolute top-0 right-0 
            transition duration-150 ease-in-out origin-top-left
            min-w-32
            "
                    >
                        <li className="px-3 py-1 hover:bg-gray-100">2.7</li>
                        <li className="px-3 py-1 hover:bg-gray-100">3+</li>
                    </ul>
                    </li>
                    <li className="px-3 py-1 hover:bg-gray-100">Go</li>
                    <li className="px-3 py-1 hover:bg-gray-100">Rust</li>
                </ul>
                </li>
                <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Testing</li>
            </ul>
        </div>
    </div>
  )
}
