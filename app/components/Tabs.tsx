import { useState } from 'react';
import hljs from 'highlight.js/lib/core';
import kotlin from 'highlight.js/lib/languages/kotlin';
import 'highlight.js/styles/github-dark.css'; // Используем темную тему для кода
import { tabs } from './data';
import './Tabs.css';

hljs.registerLanguage('kotlin', kotlin);

const initialIndex = Math.floor(Math.random() * tabs.length);

export function KotlinTabs() {
    const [activeIndex, setActiveIndex] = useState(initialIndex);

    const highlightedCode = hljs.highlight(tabs[activeIndex].code, {
        language: 'kotlin'
    }).value;

    return (
        <div className="section-wrapper">
            {/* Текстовый блок (слева или сверху) */}
            <div className="text-content">
                <h2 className="section-title">Modern, concise and safe programming language</h2>
                <p className="section-description">
                    Easy to pick up, so you can create powerful applications immediately.
                </p>
                <button className="get-started-btn">Get started</button>
            </div>

            {/* Интерактивный блок с кодом */}
            <div className="tabs-container">
                <div className="tabs-header">
                    {tabs.map((tab, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`tab-button ${activeIndex === i ? 'active' : ''}`}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>

                <pre className="code-wrapper">
                    <code
                        className="hljs language-kotlin code-block"
                        dangerouslySetInnerHTML={{ __html: highlightedCode }}
                    />
                </pre>
            </div>
        </div>
    );
}