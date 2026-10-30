# HealthSphere – Healthcare Connect

A responsive healthcare platform **front-end demonstration** built with plain HTML, CSS3 and vanilla JavaScript (ES6). It is designed to open locally in Visual Studio Code without a build step.

## Important scope and safety notes

This deliverable follows the explicit requirement to use only HTML, CSS and JavaScript. It does **not** include React, Vite, Express, MongoDB, a real authentication server, live ambulance dispatch, live maps, an AI API, or a payment gateway. Those require separate server-side services and credentials. The current app is a working local demo with sample data and browser `localStorage` persistence.

- Demo login accounts are available on the login panel; choose Patient demo, Helper demo or Hospital demo.
- You can also create a local demo account using registration.
- Passwords and demo records are stored in this browser only. Do not use real passwords or personal medical information.
- Payments are simulated; no money is collected. Never enter a UPI PIN or card security code.
- Ambulance requests are only recorded in the browser; no vehicle is dispatched and no live tracking exists. In India call **112** for emergencies.
- Browser location is requested only after pressing “Use my current location”.
- The chatbot is rule-based demo guidance, not medical advice, diagnosis or prescription.
- Hospital, doctor, helper, availability and pricing details are sample data and must be verified before real use.
- Donation registration is only an expression of interest, not official registration or proof of eligibility.

## Run in VS Code

### Option 1 – Live Server (recommended)
1. Extract `HealthSphere.zip`.
2. Open the `HealthSphere` folder in Visual Studio Code.
3. Install the **Live Server** extension if it is not already installed.
4. Right-click `index.html` and choose **Open with Live Server**.
5. The website opens in your browser.

### Option 2 – Python's simple static server
If Python is installed, open the VS Code terminal in the project folder and run:

```bash
python -m http.server 5500
```

Then visit `http://localhost:5500`.

No `npm install` or database setup is required.

## Project structure

```text
HealthSphere/
├── index.html
├── README.md
├── css/
│   └── styles.css
└── js/
    ├── data.js
    └── app.js
```

## Included demo modules

- Landing page, responsive navigation and service overview
- Registration, login, role selection, sample logins and logout
- Separate patient, helper and hospital dashboards
- Emergency request form, permission-based browser location, sample hospital directory and request status
- Doctor directory, search/filter, appointment booking and cancellation
- Health screening packages and simulated payment confirmation
- Blood/organ donation interest registration and official NOTTO link
- Elder care requests and sample helper directory
- Helper request acceptance, task status updates and demo earnings
- Hospital appointment management, doctor management, ICU availability and reports
- Rule-based AI Health Companion interface
- Profile editing, notifications, validation, feedback and local persistence

## Troubleshooting

- **Page looks unstyled:** confirm `css/styles.css` is present and the folder structure has not changed; refresh with Ctrl+F5.
- **Buttons or data do not work:** ensure `js/data.js` loads before `js/app.js`; open browser Developer Tools → Console for errors.
- **Location does not work:** use `localhost` or HTTPS, allow browser location permission, or enter the address manually.
- **Forgot a demo password:** the demo does not send reset emails. Use a sample account or clear local demo data from Profile.
- **Data disappeared:** localStorage belongs to the browser and origin. Changing browser, port or clearing site data may remove it.

## Production upgrade checklist

Before real deployment, add a secure backend/API, password hashing (Argon2/bcrypt), server-side role authorization, MongoDB models and access controls, audit logging, consent and privacy workflows, verified hospitals/helpers, secure payment provider checkout/webhooks, trusted map/ambulance partners, and a clinician-reviewed health assistant. Do not use this demo as a real emergency dispatch or clinical system.
