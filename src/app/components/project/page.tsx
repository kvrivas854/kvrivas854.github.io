'use client'
import "./style.css"

export default function Project() {
    return (
        <section className="project">
            <h1 className="text-2xl semi-bold green-light"><span className="number green-base text-lg roboto">03.</span> Projects</h1>
            <div className="flex">
                <div className="col">
                    <div className="box-container">
                        <div className="card-text">
                            <a rel="noopener noreferrer" target="_blank" className="text-xl green-base semi-bold" href="https://github.com/kvrivas854/brewery-map">Brewery Maps</a>
                            <p className="text-md green-light">Brewery map is an application that maps breweries by specific locations entered by the end user. Users can search by zip code and be presented with a list of local breweries to visit.</p>
                            <ul className="flex wrap space-evenly text-md roboto green-light">
                                <li className="list-item">HTML</li>
                                <li className="list-item">CSS</li>
                                <li className="list-item">JavaScript</li>
                                <li className="list-item">Open Brewery DB</li>
                            </ul>
                            <a rel="noopener noreferrer" href="https://github.com/kvrivas854">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path fill="#93E5AB" d="M7.734 18.817c0-.093-.093-.187-.234-.187-.14 0-.234.094-.234.187 0 .094.093.188.234.141.14 0 .234-.047.234-.14zm-1.453-.234c0 .094.094.234.235.234.093.047.234 0 .28-.093 0-.094-.046-.188-.187-.235-.14-.047-.28 0-.328.094zm2.11-.047c-.141 0-.235.094-.235.234 0 .094.14.141.281.094.141-.047.235-.094.188-.187 0-.094-.14-.188-.234-.14zm3.046-18C4.97.536 0 5.505 0 11.974c0 5.203 3.234 9.656 7.922 11.25.61.093.797-.282.797-.563v-2.906s-3.281.703-3.985-1.406c0 0-.515-1.36-1.265-1.688 0 0-1.078-.75.047-.75 0 0 1.171.094 1.828 1.219 1.031 1.828 2.718 1.312 3.422.984.093-.75.375-1.265.75-1.594-2.625-.28-5.297-.656-5.297-5.156 0-1.312.375-1.922 1.125-2.765-.14-.328-.516-1.547.14-3.188.938-.281 3.235 1.266 3.235 1.266.937-.281 1.922-.375 2.906-.375 1.031 0 2.016.094 2.953.375 0 0 2.25-1.594 3.235-1.266.656 1.64.234 2.86.14 3.188.75.843 1.219 1.453 1.219 2.765 0 4.5-2.766 4.875-5.39 5.156.421.375.796 1.079.796 2.204 0 1.546-.047 3.515-.047 3.89 0 .328.235.703.844.563 4.688-1.547 7.875-6 7.875-11.203 0-6.47-5.297-11.438-11.813-11.438zm-6.89 16.172c-.094.047-.047.188 0 .281.094.047.187.094.281.047.047-.047.047-.187-.047-.281-.093-.047-.187-.094-.234-.047zm-.516-.375c-.047.094 0 .14.094.188.094.046.188.046.234-.047 0-.047-.046-.094-.14-.141-.094-.047-.14-.047-.188 0zm1.5 1.688c-.047.046-.047.187.094.28.094.095.234.141.281.048.047-.047.047-.188-.047-.282-.093-.093-.234-.14-.328-.047zm-.515-.704c-.094.047-.094.188 0 .282.093.093.187.14.28.093.048-.047.048-.187 0-.28-.093-.095-.187-.142-.28-.095z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>    
                <div className="col">
                    <div className="box-container">
                        <div className="card-text">
                            <a rel="noopener noreferrer" target="_blank" className="text-xl green-base semi-bold" href="https://github.com/kvrivas854/Employee-Tracker">Employee Tracker</a>
                            <p className="text-md green-light">Employee tracking is a backend manager that utilizes inquirer, MySQL database, and Node.</p>
                            <ul className="flex wrap space-evenly text-md roboto green-light">
                                <li className="list-item">Inquirer</li>
                                <li className="list-item">MySQL</li>
                                <li className="list-item">Node</li>
                            </ul>
                            <a rel="noopener noreferrer" href="https://github.com/kvrivas854">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path fill="#93E5AB" d="M7.734 18.817c0-.093-.093-.187-.234-.187-.14 0-.234.094-.234.187 0 .094.093.188.234.141.14 0 .234-.047.234-.14zm-1.453-.234c0 .094.094.234.235.234.093.047.234 0 .28-.093 0-.094-.046-.188-.187-.235-.14-.047-.28 0-.328.094zm2.11-.047c-.141 0-.235.094-.235.234 0 .094.14.141.281.094.141-.047.235-.094.188-.187 0-.094-.14-.188-.234-.14zm3.046-18C4.97.536 0 5.505 0 11.974c0 5.203 3.234 9.656 7.922 11.25.61.093.797-.282.797-.563v-2.906s-3.281.703-3.985-1.406c0 0-.515-1.36-1.265-1.688 0 0-1.078-.75.047-.75 0 0 1.171.094 1.828 1.219 1.031 1.828 2.718 1.312 3.422.984.093-.75.375-1.265.75-1.594-2.625-.28-5.297-.656-5.297-5.156 0-1.312.375-1.922 1.125-2.765-.14-.328-.516-1.547.14-3.188.938-.281 3.235 1.266 3.235 1.266.937-.281 1.922-.375 2.906-.375 1.031 0 2.016.094 2.953.375 0 0 2.25-1.594 3.235-1.266.656 1.64.234 2.86.14 3.188.75.843 1.219 1.453 1.219 2.765 0 4.5-2.766 4.875-5.39 5.156.421.375.796 1.079.796 2.204 0 1.546-.047 3.515-.047 3.89 0 .328.235.703.844.563 4.688-1.547 7.875-6 7.875-11.203 0-6.47-5.297-11.438-11.813-11.438zm-6.89 16.172c-.094.047-.047.188 0 .281.094.047.187.094.281.047.047-.047.047-.187-.047-.281-.093-.047-.187-.094-.234-.047zm-.516-.375c-.047.094 0 .14.094.188.094.046.188.046.234-.047 0-.047-.046-.094-.14-.141-.094-.047-.14-.047-.188 0zm1.5 1.688c-.047.046-.047.187.094.28.094.095.234.141.281.048.047-.047.047-.188-.047-.282-.093-.093-.234-.14-.328-.047zm-.515-.704c-.094.047-.094.188 0 .282.093.093.187.14.28.093.048-.047.048-.187 0-.28-.093-.095-.187-.142-.28-.095z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="col">
                    <div className="box-container">
                        <div className="card-text">
                            <a rel="noopener noreferrer" target="_blank" className="text-xl green-base semi-bold" href="https://github.com/kvrivas854/musicFinder">Music Finder</a>
                            <p className='text-md green-light'>With this simple application you can easily search for Artist, Album Title, or Song Name. You can then proceed to add the song of your choice to your own personal playlist. If you need ideas for good songs we have a chart of the daily top songs.</p>
                            <ul className="flex wrap space-evenly text-md roboto green-light">
                                <li className="list-item">Deezer API</li>
                                <li className="list-item">Handlebars</li>
                                <li className="list-item">MySQL + Sequelize</li>
                                <li className="list-item">Express</li>
                            </ul>
                            <a rel="noopener noreferrer" href="https://github.com/kvrivas854">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path fill="#93E5AB" d="M7.734 18.817c0-.093-.093-.187-.234-.187-.14 0-.234.094-.234.187 0 .094.093.188.234.141.14 0 .234-.047.234-.14zm-1.453-.234c0 .094.094.234.235.234.093.047.234 0 .28-.093 0-.094-.046-.188-.187-.235-.14-.047-.28 0-.328.094zm2.11-.047c-.141 0-.235.094-.235.234 0 .094.14.141.281.094.141-.047.235-.094.188-.187 0-.094-.14-.188-.234-.14zm3.046-18C4.97.536 0 5.505 0 11.974c0 5.203 3.234 9.656 7.922 11.25.61.093.797-.282.797-.563v-2.906s-3.281.703-3.985-1.406c0 0-.515-1.36-1.265-1.688 0 0-1.078-.75.047-.75 0 0 1.171.094 1.828 1.219 1.031 1.828 2.718 1.312 3.422.984.093-.75.375-1.265.75-1.594-2.625-.28-5.297-.656-5.297-5.156 0-1.312.375-1.922 1.125-2.765-.14-.328-.516-1.547.14-3.188.938-.281 3.235 1.266 3.235 1.266.937-.281 1.922-.375 2.906-.375 1.031 0 2.016.094 2.953.375 0 0 2.25-1.594 3.235-1.266.656 1.64.234 2.86.14 3.188.75.843 1.219 1.453 1.219 2.765 0 4.5-2.766 4.875-5.39 5.156.421.375.796 1.079.796 2.204 0 1.546-.047 3.515-.047 3.89 0 .328.235.703.844.563 4.688-1.547 7.875-6 7.875-11.203 0-6.47-5.297-11.438-11.813-11.438zm-6.89 16.172c-.094.047-.047.188 0 .281.094.047.187.094.281.047.047-.047.047-.187-.047-.281-.093-.047-.187-.094-.234-.047zm-.516-.375c-.047.094 0 .14.094.188.094.046.188.046.234-.047 0-.047-.046-.094-.14-.141-.094-.047-.14-.047-.188 0zm1.5 1.688c-.047.046-.047.187.094.28.094.095.234.141.281.048.047-.047.047-.188-.047-.282-.093-.093-.234-.14-.328-.047zm-.515-.704c-.094.047-.094.188 0 .282.093.093.187.14.28.093.048-.047.048-.187 0-.28-.093-.095-.187-.142-.28-.095z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>    
                <div className="col">
                    <div className="box-container">
                        <div className="card-text">
                        <a rel="noopener noreferrer" target="_blank" className="text-xl green-base semi-bold" href="https://github.com/kvrivas854/day-planner">Workday Scheduler</a>
                            <p className="text-md green-light">This app is a fully functional and responsive &apos;Day Planner&apos; You are able to keep track of all of your meetings, appointments, and events every single day. Once you add what you would like to each time block, it saves it in a local storage, so that your data doesn&apos;t go away.</p>
                            <ul className="flex wrap space-evenly text-md roboto green-light">
                                <li className="list-item">JQuery</li>
                                <li className="list-item">CSS</li>
                                <li className="list-item">HTML</li>
                            </ul>
                            <a rel="noopener noreferrer" href="https://github.com/kvrivas854">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path fill="#93E5AB" d="M7.734 18.817c0-.093-.093-.187-.234-.187-.14 0-.234.094-.234.187 0 .094.093.188.234.141.14 0 .234-.047.234-.14zm-1.453-.234c0 .094.094.234.235.234.093.047.234 0 .28-.093 0-.094-.046-.188-.187-.235-.14-.047-.28 0-.328.094zm2.11-.047c-.141 0-.235.094-.235.234 0 .094.14.141.281.094.141-.047.235-.094.188-.187 0-.094-.14-.188-.234-.14zm3.046-18C4.97.536 0 5.505 0 11.974c0 5.203 3.234 9.656 7.922 11.25.61.093.797-.282.797-.563v-2.906s-3.281.703-3.985-1.406c0 0-.515-1.36-1.265-1.688 0 0-1.078-.75.047-.75 0 0 1.171.094 1.828 1.219 1.031 1.828 2.718 1.312 3.422.984.093-.75.375-1.265.75-1.594-2.625-.28-5.297-.656-5.297-5.156 0-1.312.375-1.922 1.125-2.765-.14-.328-.516-1.547.14-3.188.938-.281 3.235 1.266 3.235 1.266.937-.281 1.922-.375 2.906-.375 1.031 0 2.016.094 2.953.375 0 0 2.25-1.594 3.235-1.266.656 1.64.234 2.86.14 3.188.75.843 1.219 1.453 1.219 2.765 0 4.5-2.766 4.875-5.39 5.156.421.375.796 1.079.796 2.204 0 1.546-.047 3.515-.047 3.89 0 .328.235.703.844.563 4.688-1.547 7.875-6 7.875-11.203 0-6.47-5.297-11.438-11.813-11.438zm-6.89 16.172c-.094.047-.047.188 0 .281.094.047.187.094.281.047.047-.047.047-.187-.047-.281-.093-.047-.187-.094-.234-.047zm-.516-.375c-.047.094 0 .14.094.188.094.046.188.046.234-.047 0-.047-.046-.094-.14-.141-.094-.047-.14-.047-.188 0zm1.5 1.688c-.047.046-.047.187.094.28.094.095.234.141.281.048.047-.047.047-.188-.047-.282-.093-.093-.234-.14-.328-.047zm-.515-.704c-.094.047-.094.188 0 .282.093.093.187.14.28.093.048-.047.048-.187 0-.28-.093-.095-.187-.142-.28-.095z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}