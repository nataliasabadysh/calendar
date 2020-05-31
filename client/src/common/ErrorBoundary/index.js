// Core
import React, { Component } from 'react';

export class ErrorBoundary extends Component {
    state = {
        error: null,
        info:  null,
    };

    // Все методы, оканчивающиеся на did не срабатывает в окружении SSR
    // Этот метод только для клиента
    // Сайд-эффекты делать можно ✅
    componentDidCatch(error, info) {
        this.setState({
            error,
            info,
        });

        console.log('→ logged to server error, info:', error, info);
    }

    render() {
        const { error, info } = this.state;

        if (error) {
            return (
                <div>
                    <h1>Хьюстон, у нас проблема! 😱</h1>
                    <p>{error && error.toString()}</p>
                    <pre>
                        Component Stack Error Details:
                        {info.componentStack}
                    </pre>
                </div>
            );
        }

        return this.props.children;
    }
}
