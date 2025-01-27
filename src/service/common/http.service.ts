import { AccessDeniedError } from "./errors";

export class HttpBaseAPI {
  protected publicEndpointSuffix: string;
  protected privateEndpoint: string;

  constructor(privateEndpoint: string, publicEndpointSuffix: string) {
    this.privateEndpoint = privateEndpoint;
    this.publicEndpointSuffix = publicEndpointSuffix;
  }

  //                                        httpGet API

  async httpGet<T>(
    endpointSuffix: string,
    params?: URLSearchParams,
    accessToken?: string
  ): Promise<T> {
    const res = await fetch(
      `${this.privateEndpoint}${endpointSuffix}${params ? `?${params}` : ""}`,
      {
        cache: "no-cache",
        headers: !accessToken
          ? { "Content-Type": "application/json" }
          : {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
      }
    );
    if (!res.ok) {
      console.log(`${res.status} - ${res.statusText}`);
      throw new Error("Failed to retrieve: " + endpointSuffix);
    }
    return res.json();
  }
  //httpGetPublic API
  async httpGetPublic<T>(
    endpointSuffix: string,
    params?: URLSearchParams
  ): Promise<T> {
    return this.httpGet(
      `${this.publicEndpointSuffix}${endpointSuffix}`,
      params
    );
  }

  //                                    httpPost Api

  async httpPost<T>(
    endpointSuffix: string,
    body: object,
    accessToken?: string
  ): Promise<T> {
    const res = await fetch(`${this.privateEndpoint}${endpointSuffix}`, {
      method: "POST",
      headers: !accessToken
        ? { "Content-Type": "application/json" }
        : {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      console.log(`${res.status} - ${res.statusText}`)
      if (res.status === 403) {
        throw new AccessDeniedError("User has no access");
      }
      throw new Error("Failed to post: " + endpointSuffix);
    }
    return res.json();
  }

  //                                    htppPostPublic API

  async httpPostPublic<T>(endpointSuffix: string, body: object): Promise<T> {
    return this.httpPost(`${this.publicEndpointSuffix}${endpointSuffix}`, body);
  }
}
