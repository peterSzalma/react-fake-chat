import * as React from "react";
import { Layout } from "./components/Layout";
import { Slot } from "./components/Slot";
import { Page } from "./components/Page";

export function FakeChatPage() {

    return (
        <Page>
            <Layout columns="8" rows="20">
                <Slot column={[2, 6]} row={[2, 16]}>

                </Slot>
                <Slot column={[2, 3]} row={[18, 2]}>

                </Slot>
                <Slot column={[5, 3]} row={[18, 2]}>

                </Slot>
            </Layout>
        </Page>
    );
}

