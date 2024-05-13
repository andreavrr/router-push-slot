import React, { type ReactNode } from "react";
import {ThemedText} from "@/components/ThemedText";
import {ThemedView} from "@/components/ThemedView";
import {Button} from "react-native";
import {useRouter} from "expo-router";

const Page = (): ReactNode => {
    const router = useRouter()

    return<ThemedView>
        <ThemedText>Index</ThemedText>
        <Button title={'Go to (pages)/details'} onPress={()=> router.push('/(pages)/details')} />
    </ThemedView>
};

export default Page;
