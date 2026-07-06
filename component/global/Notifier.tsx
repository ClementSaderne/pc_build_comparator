'use client';
import styles from "./Notifier.module.css";
import type { Notification } from "@/hooks/useNotifications";

interface NotifierProps {
    notifications: Notification[];
    onDismiss: (id: string) => void;
}

export default function Notifier({ notifications, onDismiss }: NotifierProps) {
    if (notifications.length === 0) return null;

    return (
        <div className={styles.notifierContainer}>
            {notifications.map(n => (
                <div key={n.id} className={`${styles.notification} ${styles[n.type]}`}>
                    <span>{n.message}</span>
                    <button onClick={() => onDismiss(n.id)} className={styles.closeButton}>
                        ×
                    </button>
                </div>
            ))}
        </div>
    );
}