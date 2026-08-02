const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

client.on('qr', (qr) => {
    console.log('\n=== SCAN THIS QR CODE WITH WHATSAPP ON YOUR PHONE ===\n');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('\n🚀 TRICHCONNECT PC TERMINAL BOT IS ONLINE & READY!\n');
});

client.on('message', async (msg) => {
    const text = msg.body.trim().toLowerCase();

    if (text === 'hi' || text === 'hello' || text === 'help' || text === 'start' || text === 'menu') {
        const menuText = 
`⚡ *TRICHCONNECT AUTOMATED TERMINAL* ⚡
Welcome to Trichy Sector Mission Support!

Reply with a number to proceed:
1️⃣ *View Live Missions Portal*
2️⃣ *How to Apply for Missions*
3️⃣ *Admin Support / Post a Mission*
4️⃣ *Contact Lead Developer*`;

        await msg.reply(menuText);
    } 
    else if (text === '1') {
        await msg.reply('🌐 *LIVE MISSIONS PORTAL*\nAccess active opportunities here:\nhttps://trichconnect.vercel.app');
    } 
    else if (text === '2') {
        await msg.reply('📋 *HOW TO APPLY*\n1. Visit https://trichconnect.vercel.app/login.html\n2. Create or login to your profile.\n3. Update your Hero Dossier.\n4. Click *APPLY FOR MISSION* on any active listing.');
    } 
    else if (text === '3') {
        await msg.reply('🛠️ *ADMIN PROTOCOL*\nAuthorized admins can access the dashboard at:\nhttps://trichconnect.vercel.app/admin.html');
    } 
    else if (text === '4') {
        await msg.reply('👨‍💻 *DEVELOPER ESCALATION*\nYour query has been logged. The lead developer will review this channel shortly!');
    }
});

client.initialize();