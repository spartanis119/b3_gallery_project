import { Link } from 'react-router-dom';
import { Moon } from './Moon';
import { Mountain } from "./Mountain";
import { NightMoon } from "./NightMoon";
import { Planets } from "./Planets";
import { Tree } from "./Tree";
import { Waterfall } from "./Waterfall";
import { Wolves } from "./Wolves";

export const Navigation = () => {
    return (
        <div className='container thumbnail-container mt-2'>
            <Link to='/Moon' className='links'>
                <figure className='thumbnail-image-size'>
                    <Moon />
                    <figcaption>Lanscape Moon</figcaption>
                </figure>
            </Link>
            <Link to='/Mountain' className='links'>
                <figure className='thumbnail-image-size'>
                    <Mountain />
                    <figcaption>Lanscape Mountain</figcaption>
                </figure>
            </Link>
            <Link to='/NightMoon' className='links'>
                <figure className='thumbnail-image-size'>
                    <NightMoon />
                    <figcaption>Lanscape NightMoon</figcaption>
                </figure>
            </Link>
            <Link to='/Planets' className='links'>
                <figure className='thumbnail-image-size'>
                    <Planets />
                    <figcaption>Lanscape Planets</figcaption>
                </figure>
            </Link>
            <Link to='/Tree' className='links'>
                <figure className='thumbnail-image-size'>
                    <Tree />
                    <figcaption>Lanscape Tree</figcaption>
                </figure>
            </Link>
            <Link to='/Waterfall' className='links'>
                <figure className='thumbnail-image-size'>
                    <Waterfall />
                    <figcaption>Lanscape Waterfall</figcaption>
                </figure>
            </Link>
            <Link to='/Wolves' className='links'>
                <figure className='thumbnail-image-size'>
                    <Wolves />
                    <figcaption>Lanscape Wolves</figcaption>
                </figure>
            </Link>
        </div>
    )
}
