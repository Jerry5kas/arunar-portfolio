import { useEffect } from 'react';
import AOS from 'aos';

export default function useAOSRefresh() {
    useEffect(() => {
        AOS.refreshHard();
    });
}

