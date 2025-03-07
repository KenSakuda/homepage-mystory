"use server";

function validateEmail(email: string) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

export async function createContactData(
  _prevState: Record<string, unknown>,
  formData: FormData
) {
  const rawFormData = {
    lastname: formData.get("lastname") as string,
    firstname: formData.get("firstname") as string,
    company: formData.get("company") as string,
    jobtitle: formData.get("jobtitle") as string,
    phone: formData.get("phone") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };

  if (!rawFormData.lastname) {
    return {
      status: "error",
      message: "性を入力してください",
    };
  }
  if (!rawFormData.firstname) {
    return {
      status: "error",
      message: "名を入力してください",
    };
  }
  if (!rawFormData.company) {
    return {
      status: "error",
      message: "所属組織を入力してください",
    };
  }
  if (!rawFormData.jobtitle) {
    return {
      status: "error",
      message: "部署・役職を入力してください",
    };
  }
  if (!rawFormData.phone) {
    return {
      status: "error",
      message: "電話番号を入力してください",
    };
  }
  if (!rawFormData.email) {
    return {
      status: "error",
      message: "メールアドレスを入力してください",
    };
  }
  if (!validateEmail(rawFormData.email)) {
    return {
      status: "error",
      message: "メールアドレスの形式が誤っています",
    };
  }
  if (!rawFormData.message) {
    return {
      status: "error",
      message: "お問い合わせ内容を入力してください",
    };
  }

  const result = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${process.env.HUBSPOT_PORTAL_ID}/${process.env.HUBSPOT_FORM_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: [
          {
            objectTypeId: "0-1",
            name: "lastname",
            value: rawFormData.lastname,
          },
          {
            objectTypeId: "0-1",
            name: "firstname",
            value: rawFormData.firstname,
          },
          {
            objectTypeId: "0-1",
            name: "company",
            value: rawFormData.company,
          },
          {
            objectTypeId: "0-1",
            name: "jobtitle",
            value: rawFormData.jobtitle,
          },
          {
            objectTypeId: "0-1",
            name: "phone",
            value: rawFormData.phone,
          },
          {
            objectTypeId: "0-1",
            name: "email",
            value: rawFormData.email,
          },
          {
            objectTypeId: "0-1",
            name: "message",
            value: rawFormData.message,
          },
        ],
      }),
    }
  );

  try {
    await result.json();
  } catch (e) {
    console.log(e);
    return {
      status: "error",
      message: "お問い合わせに失敗しました",
    };
  }
  return { status: "success", message: "OK" };
}
