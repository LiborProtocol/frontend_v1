import{at as r,as as a,au as t,av as e}from"./index.b9fe4727.js";const d=r(e)`
    background-color: ${a.green};
    border-color: ${a.greenLight};
    color: ${a.white};

    :hover {
        background: radial-gradient(
                71.63% 130.21% at 50% 0%,
                #aadcd6 0%,
                rgba(33, 191, 150, 0) 100%
            ),
            #21bf96;
    }

    :active {
        border-color: ${a.greenLight};
        background: linear-gradient(
                83.64deg,
                #aadcd6 -9.46%,
                rgba(33, 191, 150, 0) 45.97%,
                #aadcd6 103.7%
            ),
            #21bf96;
        outline: 0;
        box-shadow: none;
    }

    :focus {
        box-shadow: 0px 0px 0px 2px ${a.blue};
    }

    svg {
        fill: ${a.white};
    }
`;var n={ButtonPrimaryStyled:d};const{ButtonPrimaryStyled:s}=n,c=({...o})=>t(s,{...o});export{c as default};
