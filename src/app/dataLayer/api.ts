const api = {
    global: {
      get: getSinglePage<GlobalEntry>('/globals'),
      getAll: () =>
        getSinglePage<GlobalEntry>('/globals')({
          query: {
            populate: [
              'logo',
              'logoIcon',
              'socials',
              'seo',
              'seo.metaImage',
              'seo.metaSocial.image',
              'seo.metaSocial.image',
              'footerLinks.items',
              'navbarLinks',
              'navbarTopCities',
            ],
          },
        }),
    },
    aboutUsPage: {
      get: getSinglePage<AboutUsEntry>('/about-uses'),
    },
  }

function getSinglePage<T>(page: string) {
    return async (
      query?: GetParams,
      tags?: string[],
      requestInit?: RequestInit,
    ) => ({
      data: (await getApi<EntityEntry<T>>(page)(query, tags, requestInit))
        .data[0],
    })
  }
  export default api
  

const STRAPI_URL = process.env.STRAPI_URL
const STRAPI_TOKEN = process.env.STRAPI_TOKEN

const fetchApi = async <T>(
    url: string,
    tags?: string[],
    init?: RequestInit,
  ) => {
    if (!STRAPI_URL || !STRAPI_TOKEN)
      throw new Error('STRAPI_URL and STRAPI_TOKEN must be defined')
  
    const res = await fetch(STRAPI_URL + url, {
      ...init,
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
        'Content-Type': 'application/json',
        ...init?.headers,
      },
    }).catch((err) => {
      console.error(err)
      throw err
    })
  
    if (!res.ok) {
      console.error('API error:', res.status, await res.text())
      throw new Error('Failed to fetch API')
    }
    const resJson = await res.json()
  
    return resJson as T
  }

  function getApi<T>(baseUrl: string) {
    return async (
      { query }: GetParams = {},
      tags?: string[],
      requestInit?: RequestInit,
    ) => {
      const qs = (await import('qs')).default
      const parsedQuery = qs.stringify(
        {
          ...(query || {}),
          filters: {
            ...(query?.filters || {}),
            tenant: process.env.TENANT,
          },
        },
        { encodeValuesOnly: true },
      )
      return fetchApi<T>(
        `${baseUrl}?${parsedQuery}`,
        tags || [baseUrl],
        requestInit,
      )
    }
  }

  interface GetParams {
    query?: any
  }
  
  interface PostParams<T = any> {
    body?: T
  }
  
  export interface Entry<T> {
    data?: {
      id: number
      attributes: T
    }
  }

  export interface EntityEntry<T> {
    data: {
      id: number
      attributes: T
    }[]
    meta: {
      pagination: {
        page: number
        pageSize: number
        pageCount: number
        total: number
      }
    }
  }

  type GlobalEntry = {
    title: string
  }


  type AboutUsEntry = {
    title?: string
    content?: string
  }