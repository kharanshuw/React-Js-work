import React from 'react'

import useTheme from '../context/ThemeProvider';

function ThemeBtn() {

    const { themeMode, darktheme, lighttheme } = useTheme();

    console.log('Initial theme mode:', themeMode);

    function onChangeHandle(e) {
        console.log('Checkbox clicked:', e.target.checked);
        const darkThemeStatus = e.target.checked;
        if (darkThemeStatus) {
            console.log('Switching to dark theme');
            darktheme();
        }
        else {
            console.log('Switching to light theme');
            lighttheme();
        }
    }

    console.log('Final theme mode:', themeMode);


    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className=""
                onChange={onChangeHandle}
                checked={themeMode === "dark"}
            />
            {/* <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span> */}
        </label>
    );

}

export default ThemeBtn