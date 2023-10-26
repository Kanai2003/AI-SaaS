// api-limit.ts
import { auth } from "@clerk/nextjs";
import { MAX_FREE_COUNT } from "@/constants";
import prismadb from "./prismadb";

export const increaseApiLimit = async () => {
    const { userId } = auth();

    if (!userId) {
        return;
    }

    try {
        const userApiLimit = await prismadb.userApiLimit.findUnique({
            where: { userId: userId },
        });

        if (userApiLimit) {
            await prismadb.userApiLimit.update({
                where: { userId: userId },
                data: { count: userApiLimit.count + 1 },
            });
        } else {
            await prismadb.userApiLimit.create({
                data: { userId: userId, count: 1 },
            });
        }
    } catch (error) {
        console.error("Error in incrementApiLimit:", error);
    }
};

export const checkApiLimit = async () => {
    const { userId } = auth();
    if (!userId) return false;

    try {
        const userApiLimit = await prismadb.userApiLimit.findUnique({
            where: { userId: userId },
        });

        if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNT) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error("Error in checkApiLimit:", error);
        return false;
    }
};

export const getApiLimitCount = async () => {
    const { userId } = auth();

    if (!userId) return 0;

    try {
        const userApiLimit = await prismadb.userApiLimit.findUnique({
            where: { userId: userId },
        });

        if (!userApiLimit) return 0;

        return userApiLimit.count;
    } catch (error) {
        console.error("Error in getApiLimitCount:", error);
        return 0;
    }
};
