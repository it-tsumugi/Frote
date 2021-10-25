import { VFC } from "react";

import { LoadingHeader } from "../atoms/LoadingHeader";
import { SCenter } from "../atoms/style/SCenter";
import { SFooterFixed } from "../atoms/style/SFooterFixed";
import { Footer } from "../organisms/layout/Footer";

export const Loading: VFC = () => {
    return (
        <SFooterFixed>
            <LoadingHeader />
            <SCenter>
                <h1>ローディング中</h1>
            </SCenter>
            <Footer />
        </SFooterFixed>
    );
};
