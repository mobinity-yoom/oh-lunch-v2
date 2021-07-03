import { Loader, SpinContainer } from "react-loader-spinner";

export default function Loading() {
    return (
        <SpinContainer>
            <Loader
                type="Oval"
                color="#3d66ba"
                timeout={100}
            >
            </Loader>
        </SpinContainer>
    );
}