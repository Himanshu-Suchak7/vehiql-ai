import { currentUser } from "@clerk/nextjs/server"
import { db } from "./prisma";
export const checkUser = async () => {
     const user = await currentUser();

    if(!user) {
        return null;
    }
    try {
        const loggedInUser = await db.user.findUnique({
            where: {
                clerk_user_id: user.id,
            },
        });
        if(loggedInUser) {
            return loggedInUser;
        }

        const newUser = await db.user.create({
            data: {
                clerk_user_id: user.id,
                name: `${user.firstName} ${user.lastName}`,
                profile_picture: user.imageUrl,
                email: user.emailAddresses[0].emailAddress,
            },
        });
        return newUser;
    } catch (error) {
        console.log(error.message);
    }
}