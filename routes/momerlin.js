const express = require('express');
const router = express.Router();

const PlaidController = require('../controllers/plaid.controller')
const ChallengesController = require('../controllers/challenges.controllers')

// const isAuth = require('../middleware/isAuth');
router.get('/', (req, res) => {
    return res.json({message:"Nothing here in this route"});
});


// const passport = require('passport');

// const jwtAuth = require('../middleware/passport').passport

// const authUser = jwtAuth(passport).authenticate("jwt", { session: false });


/**
 * @swagger
 * components:
 *   schemas:
 *     Transactions:
 *       type: object
 *       required:
 *         - address
 *         - sats
 *       properties:
 *         address:
 *           type: string
 *           description: Address of wallet
 *         time:
 *           type: number
 *           description: Time of transaction
 *         createdAt:
 *           type: number
 *           description: Transaction created time
 *         iso_currency_code:
 *           type: string
 *           description: Code of ISO currency
 *         merchand_name:
 *           type: string
 *           description: Merchand name
 *         name:
 *           type: string
 *           description: Name of company
 *         amount:
 *           type: number
 *           description: Transaction amount
 *         sats:
 *           type: number
 *           description: Sats awarded
 *       example:
 *         address: 0xadoijnm654fvdf54986df5b98d6f5b9d5fb
 *         time: 5214789630
 *         createdAt: 5214789630
 *         iso_currency_code: USD
 *         merchand_name: Tata
 *         name: Tata
 *         amount: 520.60
 *         sats: 40
 *     
 *     Token:
 *       type: object
 *       required:
 *         - public_token
 *       properties:
 *         public_token:
 *           type: string
 *           description: Public token
 *       example:
 *         public_token: publictoken
 *     
 *     Users:
 *       type: object
 *       required:
 *         - btcAddress
 *         - ethAddress
 *         - tronAddress
 *         - seedEncrpted
 *       properties:
 *         fullName:
 *           type: string
 *           description: User's Full name
 *         btcAddress:
 *           type: string
 *           description: BTC Address
 *         ethAddress:
 *           type: string
 *           description: ETH address
 *         tronAddress:
 *           type: string
 *           description: TRON address
 *         seedEncrypted:
 *           type: string
 *           description: Seed encryption
 *       example:
 *         fullName: User's name
 *         btcAddress: BTC address
 *         ethAddress: ETH address
 *         tronAddress: TRON address
 *         seedEncrypted: Encrypted seed
 * 
 *     Challenges:
 *       type: object
 *       properties:
 *         mode:
 *           type: string
 *           description: Challenge's mode
 *         type:
 *           type: string
 *           description: Challenge type
 *         totalCompetitors:
 *           type: string
 *           description: Total competitors in a challenge
 *         streakDays:
 *           type: string
 *           description: Challenge's streek days
 *         totalKm:
 *           type: string
 *           description: Total kilo meter of a challenge
 *         createdBy:
 *           type: string
 *           description: User id of challenge creator
 *         competitors:
 *           type: array
 *           description: List of competitors of a challenge
 *         startAt:
 *           type: string
 *           description: Date of challenge started
 *         endAt:
 *           type: string
 *           description: Date of challenge ended
 *         active:
 *           type: boolean
 *           description: Challenge's active state
 *       example:
 *         mode: Walk
 *         type: Streak
 *         totalCompetitors: 10
 *         streakDays: 7
 *         totalKm: 35
 *         createdBy: 45dfg65sdg4sdvdf6g54sfb564
 *         competitors: [5641zdfc1465fbdgcv546654,654165sdgvxfcv46s5dvx564]
 *         startAt: 29/10/2021
 *         endAt: 06/11/2021
 *         active: true
 */

 /**
  * @swagger
  * tags:
  *   name: Transactions
  *   description: Transactions details managment api's
  */

 /**
 * @swagger
 * /api/info:
 *   post:
 *     summary: Returns plaid link info
 *     tags: [Transactions]
 *     responses:
 *       200:
 *         description: plaid Link information
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 * /api/create_link_token:
 *   post:
 *     summary: Returns plaid link token
 *     tags: [Transactions]
 *     responses:
 *       200:
 *         description: Plaid link token
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 * /api/create_link_token_for_payment:
 *   post:
 *     summary: Returns plaid link token for payment
 *     tags: [Transactions]
 *     responses:
 *       200:
 *         description: Plaid link token for payment
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 * /api/set_access_token:
 *   post:
 *     summary: Sets plaid link access token
 *     tags: [Transactions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Token'
 *     responses:
 *       200:
 *         description: Access token set
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 * /api/momerlin/transactions:
 *   get:
 *     parameters:
 *       - in: query
 *         name: address
 *         required: true
 *     summary: Returns the list of all the transactions
 *     tags: [Transactions]
 *     responses:
 *       200:
 *         description: The list of the transactions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Transactions'
 * /api/transactions:
 *   get:
 *     summary: Returns the list of all the transactions
 *     tags: [Transactions]
 *     responses:
 *       200:
 *         description: The list of the transactions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Transactions'
 */

 
 /**
  * @swagger
  * tags:
  *   name: Users
  *   description: Users details managment api's
  */

  /**
 * @swagger
 * /api/user:
 *   post:
 *     summary: Creates new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Users'
 *     responses:
 *       200:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 * /api/users:
 *   get:
 *     summary: Returns the list of all the users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of the users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Users'
 */

/**
  * @swagger
  * tags:
  *   name: Challenges
  *   description: Challenges details managment api's
  */

  /**
 * @swagger
 * /api/challenge:
 *   post:
 *     summary: Creates new challenge
 *     tags: [Challenges]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Challenges'
 *     responses:
 *       200:
 *         description: Challenge created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 * /api/challenges:
 *   get:
 *     summary: Returns the list of all the challenges
 *     tags: [Challenges]
 *     responses:
 *       200:
 *         description: The list of the challenges
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Challenges'
 */

  
// ******* Plaid API's ******** //

router.post('/info', PlaidController.getApiInfo) // get Api info

router.post('/create_link_token',PlaidController.createLinkToken) // create client link token

router.post('/create_link_token_for_payment',PlaidController.createPaymentLinkToken) // create a link token to make payment

router.post('/set_access_token',PlaidController.setAccessToken) // Set Access token
 
router.get('/auth',PlaidController.getAuth) // Get auth information

router.get('/transactions',PlaidController.getTransactions) // Get Transactions from plaid

router.post('/user',PlaidController.createUser) // Create user

router.get('/users',PlaidController.createLinkToken) // Get users

router.get('/momerlin/transactions',PlaidController.getMomerlinTransactions) // Get transations from influxdb

router.get('/investment_transactions',PlaidController.getInvestmentTransactions) // Get investments transactions

router.get('/identity',PlaidController.getIdentity) // Get Identity of a user

router.get('/balance',PlaidController.getBalance) // Get account balance

router.get('/holdings',PlaidController.getHoldings)  // Get Account holdings

router.get('/item',PlaidController.getItem) // Get an item

router.get('/assets',PlaidController.getItemAssets) // Get assets

router.get('/accounts',PlaidController.getItemAccount) // Get accounts

router.get('/payment',PlaidController.getPayment) // Get payments list

// ******* Challenges API's ******** //

router.post('/challenge',ChallengesController.createChallenge) // Create challenge

router.get('/challenges',ChallengesController.getChallenges) // Api to Get challenges 

module.exports = router;