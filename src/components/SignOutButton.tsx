import {Loader2, LogOut} from 'lucide-react'
import {ButtonHTMLAttributes, FC, useState} from 'react'
import {toast} from 'react-hot-toast'
import Button from './ui/Button'
import {useNavigate} from 'react-router'

interface SignOutButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

const SignOutButton: FC<SignOutButtonProps> = ({...props}) => {
    const [isSigningOut, setIsSigningOut] = useState<boolean>(false)
    const navigate = useNavigate();
    return (
        <Button
            {...props}
            variant='ghost'
            onClick={async () => {
                setIsSigningOut(true)
                try {
                    localStorage.setItem("userInfo", "");
                    navigate('/')
                } catch (error) {
                    toast.error('There was a problem signing out')
                } finally {
                    setIsSigningOut(false)
                }
            }}>
            {isSigningOut ? (
                <Loader2 className='animate-spin h-4 w-4'/>
            ) : (
                <LogOut className='w-4 h-4'/>
            )}
        </Button>
    )
}

export default SignOutButton