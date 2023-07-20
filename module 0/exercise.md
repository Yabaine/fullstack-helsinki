You can check the diagram with this live editor [live editor](https://mermaid.live/)

0.4: New note diagram

sequenceDiagram
    participant User
    participant Browser 
    participant Server 

    User->>Browser: Adds note in input form
    User->>Browser: Clicks button, submits form
    Browser-->>+Server: HTTP Request POST, /new_note
    Server-->>-Browser: Returns status 302, /notes
    Browser-->>Browser: Reloads page to /notes
    Browser-->>+Server: HTTP Request GET(main.css)
    Server-->>-Browser: Returns status 200, /main.css
    Browser-->>+Server: HTTP Request GET(main.js)
    Server-->>-Browser: Returns status 200, /main.js
    Note right of Browser: The browser starts executing the JavaScript code that fetches the JSON from the server
    Browser-->>+Server: HTTP Request GET(data.json)
    Server-->>-Browser: Returns status 200, /data.json


0.5: Single page app diagram

sequenceDiagram
    participant Browser 
    participant Server 

    Browser-->>+Server: HTTP Request GET, https://studies.cs.helsinki.fi/exampleapp/spa
    Server-->>-Browser: Returns status 200, HTML document
    Browser-->>+Server: HTTP Request GET. https://studies.cs.helsinki.fi/exampleapp/main.css
    Server-->>-Browser: Returns status 200, /main.css
    Browser-->>+Server: HTTP Request GET, https://studies.cs.helsinki.fi/exampleapp/spa.js
    Server-->>-Browser: Returns status 200, /spa.js
    Note right of Browser: The browser starts executing the JavaScript code that fetches the JSON from the server
    Browser-->>+Server: HTTP Request GET, https://studies.cs.helsinki.fi/exampleapp/data.json
    Server-->>-Browser: Returns status 200, /data.json


0.6: New note in Single page app diagram

sequenceDiagram
    participant User
    participant Browser 
    participant Server 

    User->>Browser: Adds note in input form
    User->>Browser: Clicks button, submits form
    Browser-->>+Server: HTTP Request POST, https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Server-->>-Browser: Returns status 201 created
    Note right of Browser: The response includes {"message":"note created"}
