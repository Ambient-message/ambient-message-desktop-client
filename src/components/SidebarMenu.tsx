
import { Loader2 } from 'lucide-react'
import Button, { IButtonProps } from './ui/Button'
import { useNavigate } from 'react-router'
import React, { ButtonHTMLAttributes, FC, useState } from 'react'
import PropTypes from 'prop-types';

const SidebarMenu : React.FC<{ buttons: React.ReactNode[] }> = ({ buttons }) =>{

  return (
    <div className='flex flex-col border-gray-200 border-r bg-white w-20 sidebar'>
      <table className='m-auto mt-5'>
        <tbody>
            {buttons.map((button, index) => (
            <tr key={index}>
              <td>
                {button}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}


SidebarMenu.propTypes = {
    buttons: PropTypes.arrayOf(PropTypes.node).isRequired,
  };

export default SidebarMenu