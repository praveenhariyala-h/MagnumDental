# Magnum Dental Opus — Dental Clinic Website

Responsive React website for **Magnum Dental Opus**, a dental clinic in Sheela Nagar, Visakhapatnam. Built with React, Bootstrap 5, and Sass. Originally based on the Dentalist template and customized for Magnum Dental Opus branding, location, and booking flow.

## Clinic

| Detail | Info |
| --- | --- |
| **Name** | Magnum Dental Opus |
| **Location** | First floor, Sri Sai Villa Complex, NH-16, Sheela Nagar, Visakhapatnam, Andhra Pradesh 530012 |
| **Phone** | 9100291726 |
| **WhatsApp** | 7976615937 |
| **Hours** | 09:00 AM – 06:00 PM |
| **Email (bookings)** | kumarhariyal02@gmail.com |

## Tech Stack

- React 18 (Create React App)
- React Router
- Bootstrap 5
- Sass
- React Icons
- React Slick
- AOS (scroll animations)

## Features

- Fully responsive layout
- Custom Magnum Dental Opus branding (logo, banner, footer)
- Clinic location map embed (Google Maps)
- Direct call and WhatsApp links across banner, appointment, and footer
- Appointment booking form with:
  - Name, email, phone, service, and message fields
  - Email delivery to `kumarhariyal02@gmail.com` via [FormSubmit](https://formsubmit.co/)
  - WhatsApp message prefills for clinic number `7976615937`
- Service options: Dentures, Implants, Whitening, Root Canal
- Smooth AOS animations

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About Us |
| `/singleservice` | Services |
| `/blogs` | Blog listing |
| `/blog/:url` | Single blog |
| `/contact` | Contact / appointment |

## Getting Started

```bash
npm install
npm start
```

Runs at [http://localhost:3000](http://localhost:3000).

```bash
npm run build
```

Creates a production build in the `build` folder.

## Appointment Form Setup

The booking form lives in `src/components/ContactForm/ContactForm.js`.

1. **Email** — Submissions are posted to FormSubmit for `kumarhariyal02@gmail.com`.
   - On the **first** submission, FormSubmit sends a confirmation email to that inbox.
   - Open the email and click **Activate Form** once.
   - Later bookings are delivered automatically.
2. **WhatsApp** — After submit, WhatsApp opens with the appointment details prefilled for `917976615937`. The visitor must tap **Send** (WhatsApp does not allow silent sends from a website).

## Project Structure (main areas)

```
src/
  components/     # Navbar, ContactForm, shared UI
  pages/          # Route-level pages
  sections/       # Banner, Appointment, Footer, Services, etc.
  assets/         # Logos, banner images, icons
```


