
export namespace UserManagement{
    export namespace Admin{
        export class AdminUser{
            private name: string;
            private email: string;
            private isSuperAdmin: boolean = false;

            constructor(name: string, email: string){
                this.name = name;
                this.email = email;
            }
            addSuperAdmin(): boolean{
                return (this.isSuperAdmin = true)
            }

            toggleSuperAdmin(): boolean{
                return (this.isSuperAdmin = !this.isSuperAdmin)
            }
            userInfo():void{
                console.log(`Name: ${this.name}`);
                console.log(`Email: ${this.email}`);
                console.log(`Role: ${this.isSuperAdmin}`);
            }
        }
    }
}