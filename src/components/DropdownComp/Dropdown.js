import React from 'react'
import { DropdownContent, DropdownHead, DropdownItem, DropdownList, DropdownWrapper } from './Dropdown.style'

const Dropdown = () => {
    return (
        <DropdownWrapper>
            <DropdownHead>
                <img src={'./img/flag-geo.png'} />
            </DropdownHead>
            <DropdownContent>
                <DropdownList>
                    <DropdownItem>asa</DropdownItem>
                </DropdownList>
            </DropdownContent>
        </DropdownWrapper>
    )
}

export default Dropdown
