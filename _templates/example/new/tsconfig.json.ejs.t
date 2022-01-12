---
to: examples/<%=name%>/tsconfig.json
---
{
    "include": [
        "./src/**/*"
    ],
    "compilerOptions": {
        "strict": true,
        "esModuleInterop": true,
        "lib": [
            "dom",
            "es2015"
        ],
        "jsx": "react-jsx"
    }
}