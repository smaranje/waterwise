import React, { useEffect, useState } from 'react';

const CustomizeTable: React.FC = () => {
    const initialColorScheme = localStorage.getItem('colorScheme') ?? 'light';
    
    const [colorScheme, setColorScheme] = useState<string>(initialColorScheme);

    const handleColorSchemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const scheme = e.target.value;
        setColorScheme(scheme);
        localStorage.setItem('colorScheme', scheme);
        applyColorScheme(scheme);
    };

    const applyColorScheme = (scheme: string) => {
        if (scheme === 'dark') {
            document.body.style.backgroundColor = '#333';
            document.body.style.color = '#fff';
        } else {
            document.body.style.backgroundColor = '#fff';
            document.body.style.color = '#000';
        }
    }

    //set color scheme on intial page loading (?)
    useEffect(() => {
        applyColorScheme(colorScheme);
    }, []);

    return (
        <div>
            <label htmlFor="colorScheme">Choose Color Scheme: </label>
            <select id="colorScheme" value={colorScheme} onChange={handleColorSchemeChange}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
        </div>
    )
};

export default CustomizeTable;