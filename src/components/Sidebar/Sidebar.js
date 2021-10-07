import React from 'react'
import SVG from 'react-inlinesvg';
import { SidebarOpacity, SidebarSection, SidebarSection__item, SidebarSection__list, SidebarSection__title, SidebarWrapper } from './Sidebar.style'

const Sidebar = ({active}) => {
    return (
        <>
            <SidebarWrapper active={active}>

                <SidebarSection>
                    <SidebarSection__list>
                        <SidebarSection__item to="" className="active">
                            <SVG 
                                src="./img/home.svg"
                            />
                            <span>home</span>
                        </SidebarSection__item>
                        <SidebarSection__item to="">
                            <SVG 
                                src="./img/studio.svg"
                            />
                            <span>Movies</span>
                        </SidebarSection__item>
                        <SidebarSection__item to="">
                            <SVG 
                                src="./img/tv shows.svg"
                            />
                            <span>tv shows</span>
                        </SidebarSection__item>
                        <SidebarSection__item to="">
                            <SVG 
                                src="./img/movie list.svg"
                            />
                            <span>collection</span>
                        </SidebarSection__item>
                        <SidebarSection__item to="">
                            <SVG 
                                src="./img/studio.svg"
                            />
                            <span>studio</span>
                        </SidebarSection__item>
                        <SidebarSection__item to="">
                            <SVG 
                                src="./img/oscars.svg"
                            />
                            <span>oscars</span>
                        </SidebarSection__item>
                    </SidebarSection__list>
                </SidebarSection>

                <SidebarSection>
                    <SidebarSection__title>რჩეული სიები</SidebarSection__title>
                    <SidebarSection__list>
                        <SidebarSection__item to="">
                            <SVG 
                                src="./img/studio.svg"
                            />
                            <span>collection</span>
                        </SidebarSection__item>
                        <SidebarSection__item to="">
                            <SVG 
                                src="./img/studio.svg"
                            />
                            <span>collection</span>
                        </SidebarSection__item>
                        <SidebarSection__item to="">
                            <SVG 
                                src="./img/studio.svg"
                            />
                            <span>collection</span>
                        </SidebarSection__item>
                        <SidebarSection__item to="">
                            <SVG 
                                src="./img/studio.svg"
                            />
                            <span>collection</span>
                        </SidebarSection__item>
                        <SidebarSection__item to="">
                            <SVG 
                                src="./img/studio.svg"
                            />
                            <span>collection</span>
                        </SidebarSection__item>
                    </SidebarSection__list>
                </SidebarSection>

                <SidebarSection>
                    <SidebarSection__title>რჩეული სიები</SidebarSection__title>
                    <SidebarSection__list>
                        <SidebarSection__item to="">
                            <SVG 
                                src="./img/studio.svg"
                            />
                            <span>collection</span>
                        </SidebarSection__item>
                        <SidebarSection__item to="">
                            <SVG 
                                src="./img/studio.svg"
                            />
                            <span>collection</span>
                        </SidebarSection__item>
                        <SidebarSection__item to="">
                            <SVG 
                                src="./img/studio.svg"
                            />
                            <span>collection</span>
                        </SidebarSection__item>
                        <SidebarSection__item to="">
                            <SVG 
                                src="./img/studio.svg"
                            />
                            <span>collection</span>
                        </SidebarSection__item>
                        <SidebarSection__item to="">
                            <SVG 
                                src="./img/studio.svg"
                            />
                            <span>collection</span>
                        </SidebarSection__item>
                    </SidebarSection__list>
                </SidebarSection>
            </SidebarWrapper>

            <SidebarOpacity active={active} />
        </>
    )
}

export default Sidebar
