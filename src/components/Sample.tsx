import React from 'react';
import { useTranslation } from 'react-i18next';

const Sample = () => {
    const { t: translate } = useTranslation();
    return <h2>{translate('WELCOME_MESSAGE')}</h2>;
};

export default Sample;
