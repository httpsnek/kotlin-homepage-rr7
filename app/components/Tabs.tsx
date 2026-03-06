import { useState } from 'react';
import Button from '@rescui/button';
import { useTextStyles } from '@rescui/typography';
import { TabList, Tab, TabSeparator } from '@rescui/tab-list';
import cn from 'classnames';

import hljs from 'highlight.js/lib/core';
import kotlin from 'highlight.js/lib/languages/kotlin';
import 'highlight.js/styles/github.css';

import { tabs } from './data';
import './Tabs.css';

hljs.registerLanguage('kotlin', kotlin);

const initialIndex = Math.floor(Math.random() * tabs.length);

export function KotlinTabs() {
    const textCn = useTextStyles();
    const [activeIndex, setActiveIndex] = useState(initialIndex);

    const highlightedCode = hljs.highlight(tabs[activeIndex].code, {
        language: 'kotlin'
    }).value;

    return (
        <div className="section-wrapper">
            {}
            <div className="text-content">
                <h2 className={textCn('rs-h2')}>
                    Modern, concise and safe programming language
                </h2>
                <p className={cn(textCn('rs-text-2'), 'section-description')}>
                    Easy to pick up, so you can create powerful applications immediately.
                </p>
                <div style={{ marginTop: '32px' }}>
                    <Button mode="outline" size="l" href="/docs/getting-started.html">
                        Get started
                    </Button>
                </div>
            </div>

            {}
            <div className="tabs-container">
                <TabList value={activeIndex} onChange={(v: number) => setActiveIndex(v)}>
                    {tabs.map((tab, i) => (
                        <Tab key={i}>{tab.title}</Tab>
                    ))}
                </TabList>
                <TabSeparator />
                
                <pre className="code-wrapper" style={{ marginTop: '16px' }}>
                    <code
                        className="hljs language-kotlin code-block"
                        dangerouslySetInnerHTML={{ __html: highlightedCode }}
                    />
                </pre>
            </div>
        </div>
    );
}