"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { createContactData } from "@/app/_actions/contact";
import { useActionState } from "react";
import styles from "./index.module.css";

interface ContactFormState {
  status: "success" | "error" | "";
  message: string;
}

const initialState: ContactFormState = {
  status: "",
  message: "",
};

const handleCreateContactData = async (
  state: ContactFormState,
  formData: FormData
): Promise<ContactFormState> => {
  return await createContactData(state, formData);
};

export default function ContactForm() {
  const [state, formAction] = useActionState(
    handleCreateContactData,
    initialState
  );
  console.log(state);

  const handleSubmit = () => {
    sendGAEvent({ event: "contact", value: "submit" });
  };

  if (state.status === "success") {
    return (
      <p className={styles.success}>
        6 お問い合わせいただき、ありがとうございます。
        <br />
        お返事まで今しばらくお待ちください。
      </p>
    );
  }

  return (
    <form className={styles.form} action={formAction} onSubmit={handleSubmit}>
      <div className={styles.horizontal}>
        <div className={styles.item}>
          <label className={styles.label} htmlFor="lastname">
            性
          </label>
          <input
            className={styles.textfield}
            type="text"
            id="lastname"
            name="lastname"
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label} htmlFor="firstname">
            名
          </label>
          <input
            className={styles.textfield}
            type="text"
            id="firstname"
            name="firstname"
          />
        </div>
      </div>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="company">
          所属組織
        </label>
        <input
          className={styles.textfield}
          type="text"
          id="company"
          name="company"
        />
      </div>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="jobtitle">
          部署・役職など
        </label>
        <input
          className={styles.textfield}
          type="text"
          id="jobtitle"
          name="jobtitle"
        />
      </div>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="phone">
          電話番号
        </label>
        <input
          className={styles.textfield}
          type="text"
          id="phone"
          name="phone"
        />
      </div>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="email">
          メールアドレス
        </label>
        <input
          className={styles.textfield}
          type="text"
          id="email"
          name="email"
        />
      </div>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="message">
          お問い合わせ内容
        </label>
        <textarea className={styles.textarea} id="message" name="message" />
      </div>
      <div className={styles.action}>
        {state.status === "error" && (
          <p className={styles.error}>{state.message}</p>
        )}
        <input type="submit" value="送信する" className={styles.button} />
      </div>
    </form>
  );
}
