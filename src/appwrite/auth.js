
import { Client, Account, ID } from "appwrite";
import conf from "../conf";

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    }

    async createAccount ({ email, password, userName}){
        try {
            const userData = await this.account.create(ID.unique(), email, password, userName);
        console.log(userData);

        if (userData) {
            
            return userData
        }
        } catch (error) {
            throw error;
        }
    }

    async login(email, password){
       try {

        try {
            await this.account.deleteSessions();
        } catch (e) {
            console.log("No active session to delete");
        }
        
        const session = await this.account.createEmailPasswordSession(email, password)
        console.log(session)
        if (session) {
            return session
        }
       } catch (error) {
        throw error;
       }
    }

    async getCurrentUser(){
        try {
            const result = await this.account.get();
        console.log(result);
        if (result) {
            return result
        }
        } catch (error) {
            throw error;
        }
    }

    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }

    async updatePassword({password, oldPassword}){
        try {
            const result = this.account.updatePassword(password, oldPassword);
            console.log(result);
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService;
export default authService